// src/recipeStore.js
import create from 'zustand'

export const useRecipeStore = create(set => ({
  // initial recipes (can be empty [])
  recipes: [
    { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian meat sauce.' },
    { id: 2, title: 'Pancakes', description: 'Fluffy pancakes with syrup.' }
  ],

  // search & filter state
  searchTerm: '',
  // start filteredRecipes with the full list so the list shows initially
  filteredRecipes: [
    { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian meat sauce.' },
    { id: 2, title: 'Pancakes', description: 'Fluffy pancakes with syrup.' }
  ],

  // Add recipe and keep filteredRecipes in sync with the current searchTerm
  addRecipe: (newRecipe) => set(state => {
    const recipes = [...state.recipes, newRecipe]
    const filteredRecipes = state.searchTerm
      ? recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
      : recipes
    return { recipes, filteredRecipes }
  }),

  // Replace all recipes (keeps filtered in sync)
  setRecipes: (recipes) => set(state => {
    const filteredRecipes = state.searchTerm
      ? recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
      : recipes
    return { recipes, filteredRecipes }
  }),

  // Update a recipe by id (keeps filtered in sync)
  updateRecipe: (updatedRecipe) => set(state => {
    const recipes = state.recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    const filteredRecipes = state.searchTerm
      ? recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
      : recipes
    return { recipes, filteredRecipes }
  }),

  // Delete a recipe (keeps filtered in sync)
  deleteRecipe: (id) => set(state => {
    const recipes = state.recipes.filter(r => r.id !== id)
    const filteredRecipes = state.searchTerm
      ? recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
      : recipes
    return { recipes, filteredRecipes }
  }),

  // Set the search term and compute filteredRecipes immediately
  setSearchTerm: (term) => set(state => {
    const filteredRecipes = term
      ? state.recipes.filter(r => r.title.toLowerCase().includes(term.toLowerCase()))
      : state.recipes
    return { searchTerm: term, filteredRecipes }
  }),

  // Explicit action to recompute filteredRecipes from current recipes/searchTerm
  filterRecipes: () => set(state => {
    const term = state.searchTerm
    const filteredRecipes = term
      ? state.recipes.filter(r => r.title.toLowerCase().includes(term.toLowerCase()))
      : state.recipes
    return { filteredRecipes }
  }),
}))




























