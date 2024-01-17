import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

type RecipeDetailsType =
  | {
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
            amount: number
            unitShort: string
          }
        }
      }[];
      vegetarian: boolean;
      vegan: boolean;
      glutenFree: boolean;
      dairyFree: boolean;
      ketogenic: boolean;
      sourceUrl: string;
    };

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
    <div>
      <h2>{recipeDetails?.title}</h2>
      <p>Preparation Time: {recipeDetails?.preparationMinutes} minutes</p>
      <p>Cooking Time: {recipeDetails?.cookingMinutes} minutes</p>
      <p>Total Time: {recipeDetails?.readyInMinutes} minutes</p>
      <img alt="recipe-thumbnail" src={recipeDetails?.image}/>
      <h3>Ingredients:</h3>
      {recipeDetails?.extendedIngredients.map(ingr => {
        return (
          <p><span className="font-bold">{ingr.measures.us.amount} {ingr.measures.us.unitShort}</span> {ingr.name}</p>
        )
      })}
      <h3>Instructions:</h3>
      {recipeDetails?.analyzedInstructions[0].steps.map((instr, idx) => {
        return (
          <p><span>{idx + 1}: </span>{instr.step}</p>
        )
      })}
    </div>
  );
};
