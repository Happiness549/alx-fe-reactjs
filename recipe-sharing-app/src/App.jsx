import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import EditRecipeWrapper from './components/EditRecipeWrapper';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home page: add recipe + list */}
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />

        {/* Recipe details page */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />

        {/* Edit recipe page */}
        <Route path="/recipes/:id/edit" element={<EditRecipeWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;






