import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dataJson from "../data.json";

function HomePage() {
  const [data, setData] = useState([]); // ✅ use camelCase for state

  useEffect(() => {
    setData(dataJson);
  }, []);

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Homepage</h1>

      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
         <Link key={item.id} to={`/recipe/${item.id}`}>
          <li
            key={item.id}
            className="bg-white rounded shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            
            <img
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded-t"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.summary}</p>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
