import { useState, useEffect } from "react";
import dataJson from "../data.json";

function HomePage() {
  const [data, setData] = useState([]); // ✅ use camelCase for state

  useEffect(() => {
    setData(dataJson);
  }, []);

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Homepage</h1>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            {/* Recipe Image */}
            <img
              src={item.image} // ✅ use curly braces, no quotes
              alt={item.title} // ✅ use curly braces
              className="w-full h-48 object-cover rounded-t"
            />

            {/* Recipe Info */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
