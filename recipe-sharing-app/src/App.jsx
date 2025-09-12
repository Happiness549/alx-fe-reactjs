import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar'
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
    
        <Route path="/" element={<><SearchBar /><AddRecipeForm /><RecipeList /></>} />
      
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />

        <Route path="/recipes/:id/edit" element={<EditRecipeWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;






