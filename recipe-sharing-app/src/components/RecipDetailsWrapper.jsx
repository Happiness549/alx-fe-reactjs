import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = Number(id); // convert to number if using numeric IDs
  return <RecipeDetails recipeId={recipeId} />;
};

export default RecipeDetailsWrapper;