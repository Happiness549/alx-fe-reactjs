import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const [searchTerm, setSearchTerm] = useState('');

  if (!recipes || recipes.length === 0) return <div>No recipes yet. Add one using the form.</div>;

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}
          >
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes match your search.</p>
      )}
    </div>
  );
};

export default RecipeList;
