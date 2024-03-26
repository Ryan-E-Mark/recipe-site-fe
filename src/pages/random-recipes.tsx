import axios from "axios";
import { useMemo, useState } from "react";
import { Loader } from "../components/common/loader";
import {
  CUISINE_FILTERS_TYPE,
  DIET_FILTERS_TYPE,
  SearchFilters,
} from "../components/recipe-list/types";
import {
  CUISINE_FILTERS,
  DIET_FILTERS,
} from "../components/recipe-list/filter-helpers";
import { getStringCapitalized } from "../utils/get-string-capitalized";
import { getStringFormatted } from "../utils/get-string-formatted";
import { RecipeListItem } from "../components/recipe-list/recipe-list-item";

const initialFilterState = {
  cuisine: [],
  diet: [],
};

type FilterType = Pick<SearchFilters, "cuisine" | "diet">;

type RandomSearchResultType = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
}[];

export const RandomRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<RandomSearchResultType>();
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    cuisine: false,
    diet: false,
  });
  const [tmpFilters, setTmpFilters] = useState<FilterType>(initialFilterState);

  const filtersByEntity: {
    cuisine: CUISINE_FILTERS_TYPE;
    diet: DIET_FILTERS_TYPE;
  } = useMemo(() => {
    return {
      cuisine: CUISINE_FILTERS,
      diet: DIET_FILTERS,
    };
  }, []);

  const handleClear = () => {
    setTmpFilters(initialFilterState);
  };

  const handleApply = () => {
    setSearchParams([...tmpFilters.cuisine, ...tmpFilters.diet]);
  };

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
      params: {
        tags: searchParams,
        number: "12",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [searchParams]);

  const handleRandomSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setSearchResults(response.data.recipes);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(searchResults);

  return (
    <div className="h-screen grid">
      <div className="flex flex-col justify-center items-center self-start">
        <div className="bg-gray-200 rounded-md flex justify-start gap-x-12 px-4 mt-8">
          <div className="flex flex-col p-2 gap-y-4 items-center">
            <h1 className="text-lg font-bold">Search for random recipes</h1>
            <button
              onClick={handleRandomSearch}
              className="w-3/4 bg-white hover:bg-gray-50 text-black py-1 px-4 rounded-full shadow-sm"
            >
              Search
            </button>
          </div>
          <div className="flex flex-col items-center p-2 gap-y-4">
            <h3 className="text-md font-bold">Filter your results</h3>
            <div className="grid grid-cols-2 gap-x-4">
              {Object.keys(filtersByEntity).map((entity) => {
                return (
                  <div className="w-auto" key={entity}>
                    <button
                      className="inline-flex w-52 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() =>
                        setIsDropdownOpen({
                          ...isDropdownOpen,
                          [entity]:
                            !isDropdownOpen[
                              entity as keyof (
                                | CUISINE_FILTERS_TYPE
                                | DIET_FILTERS_TYPE
                              )
                            ],
                        })
                      }
                    >
                      {getStringCapitalized(entity)}
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen[
                      entity as keyof (CUISINE_FILTERS_TYPE | DIET_FILTERS_TYPE)
                    ] && (
                      <div className="py-2 my-2 w-52 bg-white drop-shadow-lg rounded-lg overflow-y-scroll h-36 absolute z-10">
                        <ul>
                          {Object.keys(
                            filtersByEntity[
                              entity as keyof typeof filtersByEntity
                            ]
                          ).map((filter, idx) => {
                            const isChecked = !!tmpFilters[
                              entity as keyof FilterType
                            ].includes(
                              filtersByEntity[
                                entity as keyof typeof filtersByEntity
                              ][
                                filter as keyof (
                                  | CUISINE_FILTERS_TYPE
                                  | DIET_FILTERS_TYPE
                                )
                              ]
                            );

                            return (
                              <li
                                key={idx}
                                className="w-full rounded-t-lg hover:bg-gray-50"
                                onClick={() => {
                                  if (!isChecked) {
                                    setTmpFilters({
                                      ...tmpFilters,
                                      [entity]: [
                                        ...tmpFilters[
                                          entity as keyof FilterType
                                        ],
                                        filtersByEntity[
                                          entity as keyof typeof filtersByEntity
                                        ][
                                          filter as keyof (
                                            | CUISINE_FILTERS_TYPE
                                            | DIET_FILTERS_TYPE
                                          )
                                        ],
                                      ],
                                    });
                                  } else {
                                    setTmpFilters({
                                      ...tmpFilters,
                                      [entity]: tmpFilters[
                                        entity as keyof FilterType
                                      ].filter(
                                        (value) =>
                                          value !==
                                          filtersByEntity[
                                            entity as keyof typeof filtersByEntity
                                          ][
                                            filter as keyof (
                                              | CUISINE_FILTERS_TYPE
                                              | DIET_FILTERS_TYPE
                                            )
                                          ]
                                      ),
                                    });
                                  }
                                }}
                              >
                                <div className="flex items-center ps-3">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    value={
                                      filtersByEntity[
                                        entity as keyof typeof filtersByEntity
                                      ][
                                        filter as keyof (
                                          | CUISINE_FILTERS_TYPE
                                          | DIET_FILTERS_TYPE
                                        )
                                      ]
                                    }
                                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label className="text-gray-700 block px-4 py-2 text-sm">
                                    {getStringFormatted(filter)}
                                  </label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-1/2 flex flex-wrap justify-between">
              <button
                onClick={handleClear}
                className="bg-white hover:bg-gray-50 text-black py-1 px-4 rounded-full shadow-sm"
              >
                Clear
              </button>
              <button
                onClick={handleApply}
                className="bg-white hover:bg-gray-50 text-black py-1 px-4 rounded-full shadow-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="flex h-full justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-4 gap-8 mx-4 my-6">
        {!isLoading &&
          searchResults?.length &&
          searchResults?.map((result) => {
            return (
              <div
                key={result.id}
              >
                <RecipeListItem id={result.id} title={result.title} image={result.image} cookingTime={result.readyInMinutes}/>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mockedData = {
  vegetarian: true,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 12,
  gaps: "no",
  preparationMinutes: -1,
  cookingMinutes: -1,
  aggregateLikes: 9,
  healthScore: 2,
  creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  license: "CC BY 3.0",
  sourceName: "Foodista",
  pricePerServing: 74.71,
  extendedIngredients: [
    {
      id: 18369,
      aisle: "Baking",
      image: "white-powder.jpg",
      consistency: "SOLID",
      name: "baking powder",
      nameClean: "baking powder",
      original: "1 ½ tsp baking powder",
      originalName: "baking powder",
      amount: 1.5,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
      },
    },
    {
      id: 18372,
      aisle: "Baking",
      image: "white-powder.jpg",
      consistency: "SOLID",
      name: "baking soda",
      nameClean: "baking soda",
      original: "1 ½ tsp baking soda",
      originalName: "baking soda",
      amount: 1.5,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
      },
    },
    {
      id: 1230,
      aisle: "Milk, Eggs, Other Dairy",
      image: "buttermilk.jpg",
      consistency: "SOLID",
      name: "buttermilk",
      nameClean: "buttermilk",
      original: "1 ½ cups buttermilk",
      originalName: "buttermilk",
      amount: 1.5,
      unit: "cups",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 360,
          unitShort: "ml",
          unitLong: "milliliters",
        },
      },
    },
    {
      id: 10219334,
      aisle: "Baking",
      image: "sugar-in-bowl.png",
      consistency: "SOLID",
      name: "muscovado sugar",
      nameClean: "muscovado sugar",
      original: "¼ cup Muscovado sugar",
      originalName: "Muscovado sugar",
      amount: 0.25,
      unit: "cup",
      meta: [],
      measures: {
        us: {
          amount: 0.25,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 55,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 10019908,
      aisle: "Health Foods",
      image: "raw-brown-sugar.png",
      consistency: "SOLID",
      name: "demerara sugar",
      nameClean: "demerara sugar",
      original: "½ cup Demerara sugar",
      originalName: "Demerara sugar",
      amount: 0.5,
      unit: "cup",
      meta: [],
      measures: {
        us: {
          amount: 0.5,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 100,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 1123,
      aisle: "Milk, Eggs, Other Dairy",
      image: "egg.png",
      consistency: "SOLID",
      name: "eggs",
      nameClean: "egg",
      original: "3 eggs",
      originalName: "eggs",
      amount: 3,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 3,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 3,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 20081,
      aisle: "Baking",
      image: "flour.png",
      consistency: "SOLID",
      name: "flour",
      nameClean: "wheat flour",
      original: "3 cups all-purpose flour",
      originalName: "all-purpose flour",
      amount: 3,
      unit: "cups",
      meta: ["all-purpose"],
      measures: {
        us: {
          amount: 3,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 375,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 11216,
      aisle: "Produce",
      image: "ginger.png",
      consistency: "SOLID",
      name: "ginger",
      nameClean: "ginger",
      original: "2 Tbs peeled, grated ginger",
      originalName: "peeled, grated ginger",
      amount: 2,
      unit: "Tbs",
      meta: ["grated", "peeled"],
      measures: {
        us: {
          amount: 2,
          unitShort: "Tbs",
          unitLong: "Tbs",
        },
        metric: {
          amount: 2,
          unitShort: "Tbs",
          unitLong: "Tbs",
        },
      },
    },
    {
      id: 1012010,
      aisle: "Spices and Seasonings",
      image: "cinnamon.jpg",
      consistency: "SOLID",
      name: "ground cinnamon",
      nameClean: "ground cinnamon",
      original: "1 ½ tsp ground cinnamon",
      originalName: "ground cinnamon",
      amount: 1.5,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 1.5,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
      },
    },
    {
      id: 19911,
      aisle: "Cereal",
      image: "maple-syrup.png",
      consistency: "LIQUID",
      name: "maple syrup",
      nameClean: "maple syrup",
      original: "5 Tbs maple syrup or honey",
      originalName: "maple syrup or honey",
      amount: 5,
      unit: "Tbs",
      meta: [],
      measures: {
        us: {
          amount: 5,
          unitShort: "Tbs",
          unitLong: "Tbs",
        },
        metric: {
          amount: 5,
          unitShort: "Tbs",
          unitLong: "Tbs",
        },
      },
    },
    {
      id: 9252,
      aisle: "Produce",
      image: "pears-bosc.jpg",
      consistency: "SOLID",
      name: "pears",
      nameClean: "pear",
      original:
        "4-5 medium to large ripe pears, peeled, cored, and quartered lengthwise",
      originalName:
        "to large ripe pears, peeled, cored, and quartered lengthwise",
      amount: 4,
      unit: "",
      meta: ["medium to large", "cored", "ripe", "peeled", "quartered"],
      measures: {
        us: {
          amount: 4,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 4,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "SOLID",
      name: "salt",
      nameClean: "table salt",
      original: "1 cup salt",
      originalName: "salt",
      amount: 1,
      unit: "cup",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "cup",
          unitLong: "cup",
        },
        metric: {
          amount: 292,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 1145,
      aisle: "Milk, Eggs, Other Dairy",
      image: "butter-sliced.jpg",
      consistency: "SOLID",
      name: "butter",
      nameClean: "unsalted butter",
      original: "1 stick of unsalted butter, melted",
      originalName: "unsalted butter, melted",
      amount: 1,
      unit: "stick",
      meta: ["unsalted", "melted"],
      measures: {
        us: {
          amount: 1,
          unitShort: "stick",
          unitLong: "stick",
        },
        metric: {
          amount: 1,
          unitShort: "stick",
          unitLong: "stick",
        },
      },
    },
  ],
  id: 655455,
  title: "Pear-ginger upside-down cake",
  readyInMinutes: 45,
  servings: 12,
  sourceUrl:
    "http://www.foodista.com/recipe/T7T3XW2K/pear-ginger-upside-down-cake",
  image: "https://spoonacular.com/recipeImages/655455-556x370.jpg",
  imageType: "jpg",
  summary:
    'Need a <b>lacto ovo vegetarian dessert</b>? Pear-ginger upside-down cake could be an awesome recipe to try. This recipe serves 12. One portion of this dish contains approximately <b>6g of protein</b>, <b>10g of fat</b>, and a total of <b>325 calories</b>. For <b>75 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. If you have maple syrup, butter, buttermilk, and a few other ingredients on hand, you can make it. 9 people have tried and liked this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 29%</b>. This score is rather bad. Similar recipes include <a href="https://spoonacular.com/recipes/pear-ginger-upside-down-cake-166922">Pear-Ginger Upside-Down Cake</a>, <a href="https://spoonacular.com/recipes/pear-upside-down-ginger-cake-655445">Pear Upside-Down Ginger Cake</a>, and <a href="https://spoonacular.com/recipes/pear-ginger-upside-down-cake-1433475">Pear-ginger upside-down cake</a>.',
  cuisines: [],
  dishTypes: ["dessert"],
  diets: ["lacto ovo vegetarian"],
  occasions: [],
  instructions:
    "<ol><li>Oil a 9-inch spring form pan, and line the bottom with a 10-inch circle of parchment paper.</li><li>Combine butter, brown sugar, and cinnamon in a medium saucepan. Melt the butter over medium heat for about 1 minute.</li><li>Pour the mixture into the prepared spring form pan, completely coating the parchment paper.</li><li>Place the quartered pears on top of the butter-sugar mixture, lining the pieces up tightly in a decorative circle.</li><li>In a large mixing bowl cream butter (cut into smaller pieces) and brown sugar for 3-5 minutes, until smooth.</li><li>Add the grated ginger, and beat 1 minute more.</li><li>Add the eggs one at a time,making sure that each egg is fully incorporated before adding another.</li><li>Add in the maple syrup or honey and beat to fully mix. The mixture will look as though it is breaking or curdling, but it will come together when the dry ingredients are added.</li><li>In a separate bowl, sift together the flour, baking powder, baking soda, and salt. Whisk to fully combine.</li><li>Alternately add small amounts of flour and buttermilk to the batter, stirring and folding with a rubber spatula until the dry ingredients are just absorbed. Do not overmix the batter.</li><li>Pour and scrape the batter into the pear-lined pan, smoothing the top with a rubber spatula.</li><li>Bake the cake at 325F for about 1 hour and 45 minutes, until a skewer inserted in the cakes centre comes out clean.</li><li>Let the cake cool in the pan for 10 minutes on a wire rack.</li><li>Cover the pan with a serving plate; then carefully invert them together. Release the sides of the pan, and lift it away. Gently lift the pans base off the cake, and peel away the parchment paper.</li><li>Allow the cake to cool, and serve warm.</li></ol>",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Oil a 9-inch spring form pan, and line the bottom with a 10-inch circle of parchment paper.",
          ingredients: [
            {
              id: 4582,
              name: "cooking oil",
              localizedName: "cooking oil",
              image: "vegetable-oil.jpg",
            },
          ],
          equipment: [
            {
              id: 404770,
              name: "baking paper",
              localizedName: "baking paper",
              image: "baking-paper.jpg",
            },
            {
              id: 404645,
              name: "frying pan",
              localizedName: "frying pan",
              image: "pan.png",
            },
          ],
        },
        {
          number: 2,
          step: "Combine butter, brown sugar, and cinnamon in a medium saucepan. Melt the butter over medium heat for about 1 minute.",
          ingredients: [
            {
              id: 19334,
              name: "brown sugar",
              localizedName: "brown sugar",
              image: "dark-brown-sugar.png",
            },
            {
              id: 2010,
              name: "cinnamon",
              localizedName: "cinnamon",
              image: "cinnamon.jpg",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
          ],
          equipment: [
            {
              id: 404669,
              name: "sauce pan",
              localizedName: "sauce pan",
              image: "sauce-pan.jpg",
            },
          ],
          length: {
            number: 1,
            unit: "minutes",
          },
        },
        {
          number: 3,
          step: "Pour the mixture into the prepared spring form pan, completely coating the parchment paper.",
          ingredients: [],
          equipment: [
            {
              id: 404770,
              name: "baking paper",
              localizedName: "baking paper",
              image: "baking-paper.jpg",
            },
            {
              id: 404645,
              name: "frying pan",
              localizedName: "frying pan",
              image: "pan.png",
            },
          ],
        },
        {
          number: 4,
          step: "Place the quartered pears on top of the butter-sugar mixture, lining the pieces up tightly in a decorative circle.In a large mixing bowl cream butter (cut into smaller pieces) and brown sugar for 3-5 minutes, until smooth.",
          ingredients: [
            {
              id: 19334,
              name: "brown sugar",
              localizedName: "brown sugar",
              image: "dark-brown-sugar.png",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
            {
              id: 1053,
              name: "cream",
              localizedName: "cream",
              image: "fluid-cream.jpg",
            },
            {
              id: 9252,
              name: "pear",
              localizedName: "pear",
              image: "pears-bosc.jpg",
            },
            {
              id: 19335,
              name: "sugar",
              localizedName: "sugar",
              image: "sugar-in-bowl.png",
            },
          ],
          equipment: [
            {
              id: 405907,
              name: "mixing bowl",
              localizedName: "mixing bowl",
              image: "mixing-bowl.jpg",
            },
          ],
          length: {
            number: 5,
            unit: "minutes",
          },
        },
        {
          number: 5,
          step: "Add the grated ginger, and beat 1 minute more.",
          ingredients: [
            {
              id: 11216,
              name: "ginger",
              localizedName: "ginger",
              image: "ginger.png",
            },
          ],
          equipment: [],
          length: {
            number: 1,
            unit: "minutes",
          },
        },
        {
          number: 6,
          step: "Add the eggs one at a time,making sure that each egg is fully incorporated before adding another.",
          ingredients: [
            {
              id: 1123,
              name: "egg",
              localizedName: "egg",
              image: "egg.png",
            },
          ],
          equipment: [],
        },
        {
          number: 7,
          step: "Add in the maple syrup or honey and beat to fully mix. The mixture will look as though it is breaking or curdling, but it will come together when the dry ingredients are added.In a separate bowl, sift together the flour, baking powder, baking soda, and salt.",
          ingredients: [
            {
              id: 18369,
              name: "baking powder",
              localizedName: "baking powder",
              image: "white-powder.jpg",
            },
            {
              id: 18372,
              name: "baking soda",
              localizedName: "baking soda",
              image: "white-powder.jpg",
            },
            {
              id: 19911,
              name: "maple syrup",
              localizedName: "maple syrup",
              image: "maple-syrup.png",
            },
            {
              id: 20081,
              name: "all purpose flour",
              localizedName: "all purpose flour",
              image: "flour.png",
            },
            {
              id: 19296,
              name: "honey",
              localizedName: "honey",
              image: "honey.png",
            },
            {
              id: 2047,
              name: "salt",
              localizedName: "salt",
              image: "salt.jpg",
            },
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
          ],
        },
        {
          number: 8,
          step: "Whisk to fully combine.Alternately add small amounts of flour and buttermilk to the batter, stirring and folding with a rubber spatula until the dry ingredients are just absorbed. Do not overmix the batter.",
          ingredients: [
            {
              id: 1230,
              name: "buttermilk",
              localizedName: "buttermilk",
              image: "buttermilk.jpg",
            },
            {
              id: 20081,
              name: "all purpose flour",
              localizedName: "all purpose flour",
              image: "flour.png",
            },
          ],
          equipment: [
            {
              id: 404642,
              name: "spatula",
              localizedName: "spatula",
              image: "spatula-or-turner.jpg",
            },
            {
              id: 404661,
              name: "whisk",
              localizedName: "whisk",
              image: "whisk.png",
            },
          ],
        },
        {
          number: 9,
          step: "Pour and scrape the batter into the pear-lined pan, smoothing the top with a rubber spatula.",
          ingredients: [
            {
              id: 9252,
              name: "pear",
              localizedName: "pear",
              image: "pears-bosc.jpg",
            },
          ],
          equipment: [
            {
              id: 404642,
              name: "spatula",
              localizedName: "spatula",
              image: "spatula-or-turner.jpg",
            },
            {
              id: 404645,
              name: "frying pan",
              localizedName: "frying pan",
              image: "pan.png",
            },
          ],
        },
        {
          number: 10,
          step: "Bake the cake at 325F for about 1 hour and 45 minutes, until a skewer inserted in the cakes centre comes out clean.",
          ingredients: [],
          equipment: [
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
              temperature: {
                number: 325,
                unit: "Fahrenheit",
              },
            },
            {
              id: 3065,
              name: "skewers",
              localizedName: "skewers",
              image: "wooden-skewers.jpg",
            },
          ],
          length: {
            number: 105,
            unit: "minutes",
          },
        },
        {
          number: 11,
          step: "Let the cake cool in the pan for 10 minutes on a wire rack.Cover the pan with a serving plate; then carefully invert them together. Release the sides of the pan, and lift it away. Gently lift the pans base off the cake, and peel away the parchment paper.Allow the cake to cool, and serve warm.",
          ingredients: [
            {
              id: 0,
              name: "base",
              localizedName: "base",
              image: "",
            },
          ],
          equipment: [
            {
              id: 404770,
              name: "baking paper",
              localizedName: "baking paper",
              image: "baking-paper.jpg",
            },
            {
              id: 405900,
              name: "wire rack",
              localizedName: "wire rack",
              image: "wire-rack.jpg",
            },
            {
              id: 404645,
              name: "frying pan",
              localizedName: "frying pan",
              image: "pan.png",
            },
          ],
          length: {
            number: 10,
            unit: "minutes",
          },
        },
      ],
    },
  ],
  originalId: null,
  spoonacularScore: 35.937198638916016,
  spoonacularSourceUrl:
    "https://spoonacular.com/pear-ginger-upside-down-cake-655455",
};
