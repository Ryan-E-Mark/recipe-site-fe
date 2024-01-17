import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home-page'
import { RecipeResults } from './pages/recipe-results'
import { IndividualRecipeDetails } from './pages/individual-recipe-details'
import { Header } from './components/header/header'

export const App = () => {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipes' element={<RecipeResults />} />
          <Route path='/recipes/:recipeId' element={<IndividualRecipeDetails />} />
        </Routes>
      </BrowserRouter>
  )
}
