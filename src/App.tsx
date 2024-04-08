import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { RecipeResults } from "./pages/recipe-results";
import { IndividualRecipeDetails } from "./pages/individual-recipe-details";
import { Header } from "./components/header/header";
import { RandomRecipes } from "./pages/random-recipes";
import { SearchByIngredients } from "./pages/search-by-ingredient";
import { SearchByIngredientResults } from "./pages/search-by-ingredient-results";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipeResults />} />
        <Route
          path="/recipes/:recipeId"
          element={<IndividualRecipeDetails />}
        />
        <Route path="/random-recipe" element={<RandomRecipes />} />
        <Route path="/recipe-by-ingredient" element={<SearchByIngredients />} />
        <Route
          path="/recipe-by-ingredient-results"
          element={<SearchByIngredientResults />}
        />
      </Routes>
    </BrowserRouter>
  );
};
