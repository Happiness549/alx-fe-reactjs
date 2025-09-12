import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipeId }) => {
  // Get the recipe from the store by ID
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => recipe.id === recipeId)
  );

  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
