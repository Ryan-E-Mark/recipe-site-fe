import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Loader } from "../loader";
import { RandomRecipeType } from "../random-recipe-types/random-recipe-types";

export const BreakfastSuggested: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [breakfastRecipes, setBreakfastRecipes] = useState<RandomRecipeType>();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
      params: {
        tags: "breakfast",
        number: "3",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, []);

  const fetchBreakfastRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);

      setBreakfastRecipes(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchBreakfastRecipes();
  }, [fetchBreakfastRecipes]);

  return (
    <div>
      <h2 className="text-4xl font-bold underline">Breakfast</h2>
      {isLoading && <Loader />}
      {!isLoading && breakfastRecipes?.length && (
        breakfastRecipes.map((recipe, idx) => {
            return (
                <div key={idx}>
                    <h3>{recipe.title}</h3>
                </div>
            )
        })
      )}
    </div>
  );
};
