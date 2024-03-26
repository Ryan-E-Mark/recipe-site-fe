import { useCallback, useEffect, useMemo, useState } from "react";
import { RecipeList } from "../components/recipe-list/recipe-list";
import { ResultsPagePagination } from "../components/recipe-list/results-page-pagination";
import { SearchResults } from "../components/recipe-list/types";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const MAX_NUMBER_OF_RESULTS = 100;

export const RecipeResults = () => {
  const [searchResults, setSearchResults] = useState<SearchResults>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState<number>(1);

  const searchTerm = useLocation().state.term;

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        query: searchTerm,
        instructionsRequired: "true",
        addRecipeInformation: "true",
        number: MAX_NUMBER_OF_RESULTS,
        limitLicense: "false",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_SEARCH_API_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
  }, [searchTerm]);

  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);

      setSearchResults(response.data.results);
      setPage(1);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [options, setSearchResults]);

  useEffect(() => {
    if (searchTerm) {
      fetchRecipes();
    }
  }, [searchTerm, fetchRecipes]);

  console.log(searchResults)

  const pageEnd = page * 12;
  const pageStart = pageEnd - 12;

  const searchResultsByPage = searchResults?.slice(pageStart, pageEnd);

  return (
    <div className="h-screen flex flex-wrap flex-col justify-between items-center">
      <div className="h-full flex flex-col items-center">
        <RecipeList
          searchTerm={searchTerm}
          searchResults={searchResultsByPage}
          isLoading={isLoading}
        />
        <ResultsPagePagination
          activePage={page}
          setPage={setPage}
          resultsTotal={searchResults.length}
        />
        <a href="https://www.flaticon.com/free-icons/clock" title="clock icons">
          Clock icons created by dmitri13 - Flaticon
        </a>
      </div>
    </div>
  );
};
