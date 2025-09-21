import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData, fetchUserDetails } from "./services/githubService";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (criteria) => {
    try {
      setLoading(true);
      setError("");
      setResults([]);

      // Step 1: Get basic users
      const users = await fetchUserData(criteria);

      // Step 2: Fetch extra details for each user
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          const details = await fetchUserDetails(user.login);
          return { ...user, ...details };
        })
      );

      setResults(detailedUsers);
    } catch (err) {
      setError("Looks like we can’t find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <Search onSearch={handleSearch} />

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg shadow-md flex gap-4 items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
              <p className="text-sm text-gray-600">{user.bio || "No bio available"}</p>
              <p className="text-sm text-gray-500">
                📍 {user.location || "Unknown location"}
              </p>
              <p className="text-sm text-gray-500">
                📦 Public Repos: {user.public_repos}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

























