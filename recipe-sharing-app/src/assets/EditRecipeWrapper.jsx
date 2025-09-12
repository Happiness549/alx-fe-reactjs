import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';

const EditRecipeWrapper = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));

  if (!recipe) return <div>Recipe not found.</div>;

  return <EditRecipeForm recipe={recipe} />;
};

export default EditRecipeWrapper;
