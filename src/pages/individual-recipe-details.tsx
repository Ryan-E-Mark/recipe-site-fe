import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { RecipeDetailsType } from "../components/recipe-details/types";
import { RecipeDetails } from "../components/recipe-details/recipe-details";
import { SimilarRecipes } from "../components/recipe-details/similar-recipes";
import { Loader } from "../components/common/loader";

export const IndividualRecipeDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetailsType>();
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
      fetchRecipeDetails();
    }
  }, [recipeId, fetchRecipeDetails]);

  return (
    <div className="flex flex-wrap flex-col content-center justify-content">
      {isLoading && (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col items-center">
          <RecipeDetails recipeDetails={recipeDetails} />
          <SimilarRecipes recipeId={recipeId} />
        </div>
      )}
    </div>
  );
};

