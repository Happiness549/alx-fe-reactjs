import { useState} from 'react';
import { fetchUserData } from '../services/githubService';


function SearchBar() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      if (data) setUser(data);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setUsername('');
    }
  };

  return (
    /* JSX from earlier (input, button, conditional rendering) */
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-600">Looks like we cant find the user</p>}
      {user && (
        <div className="border p-4 rounded shadow flex items-center gap-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-xl font-bold">{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
