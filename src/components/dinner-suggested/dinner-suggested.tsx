import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Loader } from "../loader";
import { RandomRecipeType } from "../random-recipe-types/random-recipe-types";

export const DinnerSuggested: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dinnerRecipes, setDinnerRecipes] = useState<RandomRecipeType>();

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
      params: {
        tags: "dinner",
        number: "3",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, []);

  const fetchDinnerRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);

      setDinnerRecipes(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchDinnerRecipes();
  }, [fetchDinnerRecipes]);

  return (
    <div>
      <h2 className="text-4xl font-bold underline">Dinner</h2>
      {isLoading && <Loader />}
      {!isLoading && dinnerRecipes?.length && (
        dinnerRecipes.map((recipe, idx) => {
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