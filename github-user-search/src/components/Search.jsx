
import { useState } from "react";
import { fetchUserData, fetchUserDetails } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      // Step 1: Get basic users
      const users = await fetchUserData({ username, location, minRepos });

      // Step 2: Get details for each user
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          const details = await fetchUserDetails(user.login);
          return { ...user, ...details };
        })
      );

      setResults(detailedUsers);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          GitHub User Search
        </h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
        />

        <input
          type="number"
          placeholder="Min repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
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
              <h3 className="text-lg font-semibold">
                {user.name || user.login}
              </h3>
              <p className="text-sm text-gray-600">
                {user.bio || "No bio available"}
              </p>
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

export default Search;
