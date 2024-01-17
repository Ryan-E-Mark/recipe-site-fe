import { useLocation } from "react-router-dom";
import { RecipeListItem } from "./recipe-list-item";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

type SearchResults =
  | {
      id: number;
      title: string;
      readyInMinutes: number;
      image: string;
      imageUrls: string[];
    }[]
  | [];

const BASE_IMAGE_URL = "https://spoonacular.com/recipeImages/";

export const RecipeList = () => {
  const searchTerm = useLocation().state.term;
  const [searchResults, setSearchResults] = useState<SearchResults>([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: searchTerm,
        diet: "",
        excludeIngredients: "",
        intolerances: "",
        number: "10",
        offset: "0",
        type: "",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [searchTerm]);

  const fetchRecipes = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setSearchResults(response.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    if (searchTerm) {
      // fetchRecipes();
    }
  }, [searchTerm, options, fetchRecipes]);

  return (
    <div className="w-full h-full flex flex-wrap flex-col justify-center content-center ">
      {true && (
        <div className="flex justify-center">
          <Oval height="60" width="60" />
        </div>
      )}
      <h2>Results for "{searchTerm}"</h2>
      {!true &&
        searchResults?.length > 0 &&
        searchResults?.map((recipe) => {
          const imgUrl = `${BASE_IMAGE_URL}${recipe.image}`;
          return (
            <div key={recipe.id}>
              <RecipeListItem
                id={recipe.id}
                image={imgUrl}
                title={recipe.title}
                timeToCook={recipe.readyInMinutes}
              />
            </div>
          );
        })}
    </div>
  );
};
