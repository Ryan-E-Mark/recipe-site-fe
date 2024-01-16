import { useLocation } from "react-router-dom";
import { RecipeListItem } from "./recipe-list-item";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

type SearchResults =
  | [
      {
        id: number;
        title: string;
        readyInMinutes: number;
        image: string;
        imageUrls: string[];
      }
    ]
  | [];

const BASE_URL = "https://spoonacular.com/recipeImages/"

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

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchTerm) {
      fetchRecipes();
    }
  }, [searchTerm, options]);

  return (
    <div className="w-60 flex flex-wrap flex-col justify-center content-center h-50 overflow-y-scroll">
      <h2>Results for "{searchTerm}"</h2>
      {!isLoading &&
        searchResults?.length > 0 &&
        searchResults?.map((recipe, idx) => {
            const imgUrl = `${BASE_URL}${recipe.image}`
          return (
            <div key={idx}>
              <RecipeListItem
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
