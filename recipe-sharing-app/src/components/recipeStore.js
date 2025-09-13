
import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],

  // Add to favorites
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  // Remove from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
























