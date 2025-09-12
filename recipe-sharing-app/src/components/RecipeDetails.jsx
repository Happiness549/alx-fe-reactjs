import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipeId }) => {
  // Get the recipe from the store by ID
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Edit and Delete components will be rendered here */}
    </div>
  );
};

export default RecipeDetails;
