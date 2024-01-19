import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

type RecipeDetailsType = {
  title: string;
  cookingMinutes: number;
  preparationMinutes: number;
  readyInMinutes: number;
  image: string;
  analyzedInstructions: {
    name: string;
    steps: {
      ingredients: {
        id: number;
        name: string;
      }[];
      step: string;
    }[];
  }[];
  servings: number;
  extendedIngredients: {
    aisle: string;
    image: string;
    name: string;
    measures: {
      us: {
        amount: number;
        unitShort: string;
      };
    };
  }[];
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  sourceUrl: string;
};

export const IndividualRecipeDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] =
    useState<RecipeDetailsType>(mockData);
  const recipeId = useLocation().state.id;

  const options = useMemo(() => {
    return {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [recipeId]);

  const fetchRecipeDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await axios.request(options);
      setRecipeDetails(results.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    if (recipeId) {
      // fetchRecipeDetails();
    }
  }, [recipeId, fetchRecipeDetails]);

  return (
    <div className="flex flex-wrap flex-col content-center justify-content">
      <div className="flex flex-row">
        <div>
          <h2 className="font-bold text-lg">{recipeDetails?.title}</h2>
          <p><span className="font-bold">Preparation Time:</span> {recipeDetails?.preparationMinutes} minutes</p>
          <p><span className="font-bold">Cooking Time:</span> {recipeDetails?.cookingMinutes} minutes</p>
          <p><span className="font-bold">Total Time:</span> {recipeDetails?.readyInMinutes} minutes</p>
        </div>
        <img
          alt="recipe-thumbnail"
          src={recipeDetails?.image}
          className="w-1/4"
        />
      </div>
      <h3 className="font-bold border-b-2">Ingredients</h3>
      {recipeDetails?.extendedIngredients.map((ingr) => {
        return (
          <p>
            <span className="font-bold">
              {ingr.measures.us.amount} {ingr.measures.us.unitShort}
            </span>{" "}
            {ingr.name}
          </p>
        );
      })}
      <h3 className="font-bold border-b-2">Instructions</h3>
      {recipeDetails?.analyzedInstructions[0].steps.map((instr, idx) => {
        return (
          <div className="flex flex-row gap-x-3 justify-center">
            <div className="flex justify-center items-center text-black bg-lime-200 rounded-full h-8 w-8 ">{idx + 1}</div>
            <div className="w-3/4">
            <p>{instr.step}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mockData = {
  vegetarian: false,
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
  preparationMinutes: 25,
  cookingMinutes: 0,
  aggregateLikes: 122,
  healthScore: 7,
  creditsText: "Café Terra Blog",
  sourceName: "Café Terra Blog",
  pricePerServing: 137.36,
  extendedIngredients: [
    {
      id: 93607,
      aisle: "Milk, Eggs, Other Dairy",
      image: "almond-milk.png",
      consistency: "LIQUID",
      name: "almond milk",
      nameClean: "almond milk",
      original: "2 cups almond milk",
      originalName: "almond milk",
      amount: 2,
      unit: "cups",
      meta: [],
      measures: {
        us: {
          amount: 2,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 500,
          unitShort: "ml",
          unitLong: "milliliters",
        },
      },
    },
    {
      id: 9003,
      aisle: "Produce",
      image: "apple.jpg",
      consistency: "SOLID",
      name: "macintosh apples",
      nameClean: "apple",
      original: "2 macintosh apples, peeled and diced",
      originalName: "macintosh apples, peeled and diced",
      amount: 2,
      unit: "",
      meta: ["diced", "peeled"],
      measures: {
        us: {
          amount: 2,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 2,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 19334,
      aisle: "Baking",
      image: "light-brown-sugar.jpg",
      consistency: "SOLID",
      name: "brown sugar",
      nameClean: "golden brown sugar",
      original: "3 Tbsps brown sugar",
      originalName: "brown sugar",
      amount: 3,
      unit: "Tbsps",
      meta: [],
      measures: {
        us: {
          amount: 3,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 3,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 19334,
      aisle: "Baking",
      image: "dark-brown-sugar.png",
      consistency: "SOLID",
      name: "brown sugar",
      nameClean: "golden brown sugar",
      original: "3 Tbsps brown sugar",
      originalName: "brown sugar",
      amount: 3,
      unit: "Tbsps",
      meta: [],
      measures: {
        us: {
          amount: 3,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 3,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 2010,
      aisle: "Spices and Seasonings",
      image: "cinnamon.jpg",
      consistency: "SOLID",
      name: "cinnamon",
      nameClean: "cinnamon",
      original: "1 tsp cinnamon",
      originalName: "cinnamon",
      amount: 1,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
        metric: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
      },
    },
    {
      id: 1009079,
      aisle: "Dried Fruits",
      image: "dried-cranberries.jpg",
      consistency: "SOLID",
      name: "craisins",
      nameClean: "craisins",
      original: "½ cup craisins",
      originalName: "craisins",
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
          amount: 60.606,
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
      original: "2 eggs",
      originalName: "eggs",
      amount: 2,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 2,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 2,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 18029,
      aisle: "Bakery/Bread",
      image: "crusty-bread.jpg",
      consistency: "SOLID",
      name: "bread",
      nameClean: "french bread",
      original: "4 cups French bread, dice in one inch squares",
      originalName: "French bread, dice in one inch squares",
      amount: 4,
      unit: "cups",
      meta: ["french"],
      measures: {
        us: {
          amount: 4,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 946.352,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 8037,
      aisle: "Cereal",
      image: "granola.jpg",
      consistency: "SOLID",
      name: "granola",
      nameClean: "homemade granola",
      original: "¼ cup homemade granola",
      originalName: "homemade granola",
      amount: 0.25,
      unit: "cup",
      meta: ["homemade"],
      measures: {
        us: {
          amount: 0.25,
          unitShort: "cups",
          unitLong: "cups",
        },
        metric: {
          amount: 30.5,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 19296,
      aisle: "Nut butters, Jams, and Honey",
      image: "honey.png",
      consistency: "LIQUID",
      name: "honey",
      nameClean: "honey",
      original: "¼ cup honey",
      originalName: "honey",
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
          amount: 84.75,
          unitShort: "ml",
          unitLong: "milliliters",
        },
      },
    },
    {
      id: 2025,
      aisle: "Spices and Seasonings",
      image: "ground-nutmeg.jpg",
      consistency: "SOLID",
      name: "nutmeg",
      nameClean: "nutmeg",
      original: "¼ tsp nutmeg",
      originalName: "nutmeg",
      amount: 0.25,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 0.25,
          unitShort: "tsps",
          unitLong: "teaspoons",
        },
        metric: {
          amount: 0.25,
          unitShort: "tsps",
          unitLong: "teaspoons",
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
      original: "2 Tbsps unsalted butter",
      originalName: "unsalted butter",
      amount: 2,
      unit: "Tbsps",
      meta: ["unsalted"],
      measures: {
        us: {
          amount: 2,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 2,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 1052050,
      aisle: "Baking",
      image: "vanilla.jpg",
      consistency: "SOLID",
      name: "vanilla",
      nameClean: "vanilla",
      original: "1 tsp vanilla",
      originalName: "vanilla",
      amount: 1,
      unit: "tsp",
      meta: [],
      measures: {
        us: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
        metric: {
          amount: 1,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
      },
    },
  ],
  id: 515137,
  title: "Apple Party! From the Vault – Apple Craisin Bread Pudding",
  readyInMinutes: 25,
  servings: 10,
  sourceUrl:
    "http://www.cafeterrablog.com/2012/09/29/apple-party-from-the-vault-apple-craisin-bread-pudding/",
  image: "https://spoonacular.com/recipeImages/515137-556x370.jpg",
  imageType: "jpg",
  summary:
    'The recipe Apple Party! From the Vault – Apple Craisin Bread Pudding can be made <b>in about 25 minutes</b>. One portion of this dish contains around <b>12g of protein</b>, <b>7g of fat</b>, and a total of <b>391 calories</b>. For <b>$1.37 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. This recipe serves 10. 122 people found this recipe to be delicious and satisfying. It works well as a dessert. A mixture of almond milk, bread, nutmeg, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Café Terra Blog. With a spoonacular <b>score of 22%</b>, this dish is rather bad. <a href="https://spoonacular.com/recipes/caramel-apple-butter-cheesecake-dip-for-autumn-apple-party-554054">Caramel Apple Butter Cheesecake Dip for Autumn Apple Party</a>, <a href="https://spoonacular.com/recipes/apple-crisp-ice-cream-for-our-autumn-apple-party-538948">Apple Crisp Ice Cream for Our Autumn Apple Party!</a>, and <a href="https://spoonacular.com/recipes/clean-eating-bread-pudding-made-with-apple-bread-1079266">Clean Eating Bread Pudding (Made With Apple Bread!)</a> are very similar to this recipe.',
  cuisines: [],
  dishTypes: ["dessert"],
  diets: [],
  occasions: [],
  winePairing: {
    pairedWines: ["madeira", "pedro ximenez"],
    pairingText:
      "Madeiran and Pedro Ximénez are great choices for Bread Pudding. Pedro Ximénez's sweet, nutty flavor with notes of figs and caramel pair so well with bread pudding.",
    productMatches: [],
  },
  instructions:
    "Preheat oven to 350 degreesGrease small casserole dish, or you could use a square pan.In sauce pan, saute’ diced apples with butter, cinnamon, nutmeg, and brown sugar, until softened. Reserve ¼ cup of uncooked diced apples for later, and finely dice.In medium bowl, whisk together milk, eggs, and vanilla. Then add in craisins and mix well. Add in bread, let bread soak for about one to two minutes. Mix in sauteed apples, then add bread mixture into greased casserole dish. Bake for 35-45 minutes depending on oven. The bread will start to puff up and have a golden brown top.In small sauce pan, mix together honey and finely diced apples on medium low heat for about 2 minutes.Top bread pudding with small amount of granola, and honey apple mixture.Note – If you really love cinnamon, you could totally add more. Also, after eating the yummy treat, I decided I would mix in more honey. The honey really brings all the flavors together!Enjoy!",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Preheat oven to 350 degrees",
          ingredients: [],
          equipment: [
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
            },
          ],
        },
        {
          number: 2,
          step: "Grease small casserole dish, or you could use a square pan.In sauce pan, saute’ diced apples with butter, cinnamon, nutmeg, and brown sugar, until softened. Reserve ¼ cup of uncooked diced apples for later, and finely dice.In medium bowl, whisk together milk, eggs, and vanilla. Then add in craisins and mix well.",
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
              id: 1009079,
              name: "craisins",
              localizedName: "craisins",
              image: "dried-cranberries.jpg",
            },
            {
              id: 1052050,
              name: "vanilla",
              localizedName: "vanilla",
              image: "vanilla.jpg",
            },
            {
              id: 9003,
              name: "apple",
              localizedName: "apple",
              image: "apple.jpg",
            },
            {
              id: 1001,
              name: "butter",
              localizedName: "butter",
              image: "butter-sliced.jpg",
            },
            {
              id: 2025,
              name: "nutmeg",
              localizedName: "nutmeg",
              image: "ground-nutmeg.jpg",
            },
            {
              id: 0,
              name: "sauce",
              localizedName: "sauce",
              image: "",
            },
            {
              id: 1123,
              name: "egg",
              localizedName: "egg",
              image: "egg.png",
            },
            {
              id: 1077,
              name: "milk",
              localizedName: "milk",
              image: "milk.png",
            },
          ],
          equipment: [
            {
              id: 404635,
              name: "casserole dish",
              localizedName: "casserole dish",
              image: "casserole-dish.png",
            },
            {
              id: 404669,
              name: "sauce pan",
              localizedName: "sauce pan",
              image: "sauce-pan.jpg",
            },
            {
              id: 404661,
              name: "whisk",
              localizedName: "whisk",
              image: "whisk.png",
            },
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
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
          number: 3,
          step: "Add in bread, let bread soak for about one to two minutes.",
          ingredients: [
            {
              id: 18064,
              name: "bread",
              localizedName: "bread",
              image: "white-bread.jpg",
            },
          ],
          equipment: [],
          length: {
            number: 1,
            unit: "minutes",
          },
        },
        {
          number: 4,
          step: "Mix in sauteed apples, then add bread mixture into greased casserole dish.",
          ingredients: [
            {
              id: 9003,
              name: "apple",
              localizedName: "apple",
              image: "apple.jpg",
            },
            {
              id: 18064,
              name: "bread",
              localizedName: "bread",
              image: "white-bread.jpg",
            },
          ],
          equipment: [
            {
              id: 404635,
              name: "casserole dish",
              localizedName: "casserole dish",
              image: "casserole-dish.png",
            },
          ],
        },
        {
          number: 5,
          step: "Bake for 35-45 minutes depending on oven. The bread will start to puff up and have a golden brown top.In small sauce pan, mix together honey and finely diced apples on medium low heat for about 2 minutes.Top bread pudding with small amount of granola, and honey apple mixture.Note – If you really love cinnamon, you could totally add more. Also, after eating the yummy treat, I decided I would mix in more honey. The honey really brings all the flavors together!Enjoy!",
          ingredients: [
            {
              id: 2010,
              name: "cinnamon",
              localizedName: "cinnamon",
              image: "cinnamon.jpg",
            },
            {
              id: 8212,
              name: "granola",
              localizedName: "granola",
              image: "granola.jpg",
            },
            {
              id: 9003,
              name: "apple",
              localizedName: "apple",
              image: "apple.jpg",
            },
            {
              id: 18064,
              name: "bread",
              localizedName: "bread",
              image: "white-bread.jpg",
            },
            {
              id: 19296,
              name: "honey",
              localizedName: "honey",
              image: "honey.png",
            },
            {
              id: 0,
              name: "sauce",
              localizedName: "sauce",
              image: "",
            },
          ],
          equipment: [
            {
              id: 404669,
              name: "sauce pan",
              localizedName: "sauce pan",
              image: "sauce-pan.jpg",
            },
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
            },
          ],
          length: {
            number: 47,
            unit: "minutes",
          },
        },
      ],
    },
  ],
  originalId: null,
  spoonacularScore: 60.22014617919922,
};
