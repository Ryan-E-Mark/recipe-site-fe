import React from 'react'
import { RecipeList } from './recipe-list/recipe-list'
import { HomePage } from './pages/home-page/home-page'

export const App = () => {
  return (
    <div>
      <HomePage />
      <RecipeList />
    </div>
  )
}
