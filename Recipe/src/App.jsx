import { useState } from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import { Recipe } from './components/recipe'
import { RecipeDetails } from './components/recipeDetail'


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipe/>} />
          <Route path="/:id" element={<RecipeDetails/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
