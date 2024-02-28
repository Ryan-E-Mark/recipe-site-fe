import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Oval } from "react-loader-spinner";
import { SimilarRecipesType } from "./types";
import { useNavigate } from "react-router-dom";

interface SimilarRecipesProps {
  recipeId: number;
}

export const SimilarRecipes: FC<SimilarRecipesProps> = ({ recipeId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [similarRecipes, setSimilarRecipes] = useState<SimilarRecipesType>();

  const navigate = useNavigate();

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
      setSimilarRecipes(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    if (recipeId) {
      fetchSimilarRecipes();
    }
  }, [recipeId, fetchSimilarRecipes]);

  const handleOnClick = (id: number) => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <h3 className="font-bold text-md underline">Similar Recipes</h3>
      {isLoading && (
        <Oval height="60" width="60" secondaryColor="#ecfccb" color="#bef264" />
      )}
      {!isLoading && similarRecipes?.length && (
        <div className="flex flex-col justify-start">
          {similarRecipes.map((recipe, idx) => {
            return (
              <div
                className="flex hover:text-gray-500 py-1 cursor-pointer"
                key={idx}
                onClick={() => handleOnClick(recipe.id)}
              > 
                <h4>- {recipe.title}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
