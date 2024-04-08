import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../components/common/loader";
import { NoResults } from "../components/no-results";

type SearchResultType = {
  id: number;
  title: string;
  image: string;
}[];

export const SearchByIngredientResults: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResultType>();
  const ingredient = useLocation().state.ingredient;
  const navigate = useNavigate();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
      params: {
        ingredients: ingredient,
        number: "24",
        ignorePantry: "true",
        ranking: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [ingredient]);

  const handleOnClick = (id: number) => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setSearchResults(response.data);
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div className="h-screen">
        {isLoading && (
      <div className="h-full flex flex-wrap justify-center items-center">
          <Loader
          />
      </div>
        )}
      {!isLoading && searchResults?.length && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="m-8 text-center text-lg">Results for <span className="font-bold">"{ingredient}"</span></h2>
          <div className="grid grid-cols-4 gap-8 my-4 mx-4">
          {searchResults.map((recipe, idx) => {
            return (
              <div
                className="flex flex-col justify-center items-center pb-3 gap-y-4 shadow border border-gray-50 rounded-lg"
              >
                <img
                  alt="recipe-thumbnail"
                  src={recipe.image}
                  className="w-full hover:cursor-pointer rounded-lg filter-none"
                  onClick={() => handleOnClick(recipe.id)}
                />
                <h3
                  className="font-bold text-xl text-center hover:underline hover:cursor-pointer"
                  onClick={() => handleOnClick(recipe.id)}
                >
                  {recipe.title}
                </h3>
              </div>
            );
          })}
          </div>
        </div>
      )}
      {!isLoading && !searchResults?.length && (
        <div className="h-full flex justify-center items-center">
        <NoResults searchTerm={ingredient} />
        </div>
      )}
    </div>
  );
};

