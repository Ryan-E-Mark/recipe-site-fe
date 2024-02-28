import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Loader } from "../loader";
import { RandomRecipeType } from "../random-recipe-types/random-recipe-types";

export const LunchSuggested: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lunchRecipes, setLunchRecipes] = useState<RandomRecipeType>();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
      params: {
        tags: "lunch",
        number: "3",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, []);

  const fetchLunchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);

      setLunchRecipes(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchLunchRecipes();
  }, [fetchLunchRecipes]);

  return (
    <div>
      <h2 className="text-4xl font-bold underline">Lunch</h2>
      {isLoading && <Loader />}
      {!isLoading && lunchRecipes?.length && (
        lunchRecipes.map((recipe, idx) => {
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