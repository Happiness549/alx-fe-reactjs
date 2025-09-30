import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dataJson from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = dataJson.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="p-6 text-center">Loading...</p>;

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-xl mx-auto h-64 object-cover rounded-lg mb-6"
      />

      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients?.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </section>

    
      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default RecipeDetail;
