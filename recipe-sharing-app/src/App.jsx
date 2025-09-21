import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import Recipelist from "./components/Recipelist";
import FavoritesList from "./components/FavoritesList";
import RecommendationList from "./components/RecommendationsList";
import RecipDetails from "./components/RecipDetails";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: 800, margin: "24px auto", padding: "0 16px" }}>
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link> | <Link to="/favorites">Favorites</Link> | <Link to="/recommendations">Recommendations</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Recipelist />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationList />} />
            <Route path="/recipe/:id" element={<RecipDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


/*import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '24px auto', padding: '0 16px' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
*/
































