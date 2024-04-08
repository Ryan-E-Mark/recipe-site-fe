import axios from "axios";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Loader } from "../common/loader";
import { RandomRecipeType } from "../random-recipe-types/random-recipe-types";
import clock from "../../imgs/clock.png";
import { getCookingTimeFormatted } from "../../utils/get-cooking-time-formatted";
import { useNavigate } from "react-router-dom";

export const BreakfastSuggested: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [breakfastRecipes, setBreakfastRecipes] = useState<RandomRecipeType>();
  const navigate = useNavigate();

  const handleOnClick = (id: number) => {
    navigate(`/recipes/${id}`, { state: { id: id } });
  };

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
      setBreakfastRecipes(response.data.recipes);
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
    <div className="w-full flex flex-col items-start">
      <h2 className="text-2xl font-bold mx-8">Breakfast</h2>
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="flex flex-col md:flex-row">
        {!isLoading &&
          breakfastRecipes?.length &&
          breakfastRecipes.map((recipe, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col p-4 px-8 justify-center items-center gap-y-2"
              >
                <img
                  alt="recipe-thumbnail"
                  src={recipe.image}
                  className=" hover:cursor-pointer rounded-lg"
                  onClick={() => handleOnClick(recipe.id)}
                />
                <h3
                  className="font-bold text-lg text-center hover:underline hover:cursor-pointer"
                  onClick={() => handleOnClick(recipe.id)}
                >
                  {recipe.title}
                </h3>
                <div className="flex justify-center bg-gray-200 rounded-lg w-2/5 gap-x-2">
                  <img alt="spoon&fork" src={clock} className="w-6 h-6 p-1" />
                  <span>
                    - {getCookingTimeFormatted(recipe.readyInMinutes)}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
