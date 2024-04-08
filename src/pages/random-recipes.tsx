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
import { Footer } from "../components/footer/footer";

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
  glutenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
  dairyFree: boolean;
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

  return (
    <div className="max-h-full h-screen">
      <div className="h-full grid">
        <div className="flex flex-col justify-center items-center self-start">
          <div className="bg-gray-200 rounded-md flex flex-col md:flex-row justify-start gap-x-12 px-4 mt-8">
            <div className="flex flex-col p-2 gap-y-4 items-center">
              <h1 className="text-lg font-bold">Search for random recipes</h1>
              <button
                onClick={handleRandomSearch}
                className="w-3/4 bg-white hover:bg-gray-50 text-black py-1 px-4 rounded-full shadow-sm font-semibold"
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
                        className="inline-flex w-36 md:w-52 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
                        entity as keyof (
                          | CUISINE_FILTERS_TYPE
                          | DIET_FILTERS_TYPE
                        )
                      ] && (
                        <div className="py-2 my-2 w-36 md:w-52 bg-white drop-shadow-lg rounded-lg overflow-y-scroll h-36 absolute z-10">
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
                  className="bg-white hover:bg-gray-50 text-black py-1 px-4 rounded-full shadow-sm font-semibold"
                >
                  Clear
                </button>
                <button
                  onClick={handleApply}
                  className="bg-white hover:bg-gray-50 text-black py-1 px-4 rounded-full shadow-sm font-semibold"
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-4 my-6">
          {!isLoading &&
            searchResults?.length &&
            searchResults?.map((result) => {
              return (
                <div key={result.id}>
                  <RecipeListItem
                    id={result.id}
                    title={result.title}
                    image={result.image}
                    cookingTime={result.readyInMinutes}
                    glutenFree={result.glutenFree}
                    vegan={result.vegan}
                    vegetarian={result.vegetarian}
                    dairyFree={result.dairyFree}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-20">
      <Footer />
      </div>
    </div>
  );
};
