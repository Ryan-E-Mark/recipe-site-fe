import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Oval } from "react-loader-spinner";
import { SimilarRecipesType } from "./types";

interface SimilarRecipesProps {
  recipeId: number;
}

export const SimilarRecipes: FC<SimilarRecipesProps> = ({ recipeId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [similarRecipes, setSimilarRecipes] = useState<SimilarRecipesType>()

  const options = useMemo(() => {
    return {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/similar`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [recipeId]);

  const fetchSimilarRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setSimilarRecipes(response.data)
      console.log(response)
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (recipeId) {

        // fetchSimilarRecipes()
    }
  }, [recipeId]);

  return (
    <>
      <h3>Similar Recipes</h3>
      {isLoading && (
        <Oval height="60" width="60" secondaryColor="#ecfccb" color="#bef264" />
      )}
    </>
  );
};
