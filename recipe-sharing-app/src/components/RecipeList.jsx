
// src/components/RecipeList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from '../recipeStore'

export default function RecipeList() {
  // read the filtered list from the store
  const filtered = useRecipeStore(state => state.filteredRecipes)
  // fallback to full recipes if filtered is empty (useful if you prefer showing full list with empty search)
  const recipes = (filtered && filtered.length > 0) ? filtered : useRecipeStore(state => state.recipes)
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  if (!recipes || recipes.length === 0) return <div>No recipes found.</div>

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #e0e0e0', padding: 12, marginBottom: 8 }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
