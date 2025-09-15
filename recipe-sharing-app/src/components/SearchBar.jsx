/*import React from 'react'
import { useRecipeStore } from '../recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const filterRecipes = useRecipeStore(state => state.filterRecipes)

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    filterRecipes()
  }

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
    />
  )
}

export default SearchBar*/

import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ display: 'block', marginBottom: '16px', width: '100%', padding: '8px' }}
    />
  );
};

export default SearchBar;
