import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../components/common/loader";
import { NoResults } from "../components/no-results";

type SearchResultType = {
    id: number
    title: string
    image: string
}[]

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
        number: "3",
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
      setSearchResults(response.data)
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
    <div>
      {isLoading && <Loader />}
      {!isLoading && searchResults?.length && (
        <div>
            <h2>Results for {ingredient}</h2>
          {searchResults.map((recipe, idx) => {
            return (
                <div
                key={idx}
                className="flex flex-col p-4 px-8 justify-center items-center"
              >
                <img
                  alt="recipe-thumbnail"
                  src={recipe.image}
                  className=" hover:cursor-pointer"
                  onClick={() => handleOnClick(recipe.id)}
                />
                <h3
                  className="font-bold hover:underline hover:cursor-pointer"
                  onClick={() => handleOnClick(recipe.id)}
                >
                  {recipe.title}
                </h3>
              </div>
            );
          })}
        </div>
      )}
      {!isLoading && !searchResults?.length && (
        <NoResults searchTerm={ingredient}/>
      )}
    </div>
  );
};
