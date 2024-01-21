import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Oval } from "react-loader-spinner";
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
        <div className="flex justify-center">
          <Oval height="60" width="60" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex flex-row justify-center gap-x-10 m-10">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">{recipeDetails?.title}</h2>
              <div className="flex py-4 gap-4">
                <p>
                  <span className="font-bold">Preparation Time:</span>{" "}
                  {recipeDetails?.preparationMinutes} minutes
                </p>
                <p>
                  <span className="font-bold">Cooking Time:</span>{" "}
                  {recipeDetails?.cookingMinutes} minutes
                </p>
                <p>
                  <span className="font-bold">Total Time:</span>{" "}
                  {recipeDetails?.readyInMinutes} minutes
                </p>
              </div>
              <div className="flex flex-wrap flex-col justify-center content-center bg-gray-100 p-6 rounded-md w-1/2">
                <h3 className="font-bold border-b-2 text-xl">Ingredients</h3>
                {recipeDetails?.extendedIngredients.map((ingr) => {
                  return (
                    <p>
                      -
                      <span className="font-bold">
                        {ingr.measures.us.amount} {ingr.measures.us.unitShort}
                      </span>{" "}
                      {ingr.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <img
              alt="recipe-thumbnail"
              src={recipeDetails?.image}
              className="rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-2/3 flex flex-col justify-start">
              <h3 className="font-bold border-b-2 border-gray-100 text-xl">Instructions</h3>
              {recipeDetails?.analyzedInstructions[0].steps.map(
                (instr, idx) => {
                  return (
                    <div className="flex flex-row gap-x-3 p-2">
                      <div className="flex justify-center items-center text-black bg-lime-200 rounded-full h-8 w-8 ">
                        {idx + 1}
                      </div>
                      <div className="w-3/4">
                        <p>{instr.step}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

