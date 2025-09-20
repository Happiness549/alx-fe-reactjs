import { useState} from 'react';
import { fetchUserdata } from '../services/githubService';

function Search(){
    const [username, setUsername] = useState('');
    const [user, setUser] = setStaet(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUser(null)
        

        try{
            const data = await
            fetchUserData(username);
            if (data){
                setUser(data);
            }else{
                setError(true);
            }
        } catch{
            setError(true);
        }finally{
            setLoading(false);
            setUsername('')
        }
    };

    return(
        <div>
        <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
            <input type="text" placeholder='Enter GitHub username' value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='flex-1' p-2 border border-gray-300 rounded/>

            <button type='submit' 
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
                Search
                </button>

        </form>

        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find the user</p>}
        {user && <div></div>}
        <div>
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url}
            target='_blank'
            rel='noopener noreferrer'>
                View GitHub profile
            </a>
        </div>
        </div>
    );
}

export default Search;