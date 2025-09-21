import { useState} from 'react';
import { fetchUserData } from '../services/githubService';


function SearchBar({onSearch}) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minrepos, setMinRepos] = useState('');

  /*const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({username, location, minRepos});
    /*setLoading(true);
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
      */
  };

  return (
    /* JSX from earlier (input, button, conditional rendering) */
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <h2 className='text-x1 font-semibold mb-4 text-center'>GitHub User Search</h2>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />

        <input 
        type="text"
        placeholder='Enter location'
        value={location} 
        onChange={(e) =>
            setLocation(e.target.value)}
            className='w-full p-2 mb-3 border border-gray-300 round-lg'
            />

            <input type="number" 
            placeholder='Min repositories'
            value={minRepos}
            onChange={(e) => 
                setMinRepos(e.target.value)}
                className='w-full p-2 mb-3 border border-gray-300 rounded-lg'
                />


        <button 
        type="submit" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </form>

   </div>
  );
}

export default SearchBar;
