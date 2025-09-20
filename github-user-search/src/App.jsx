import { useState, useEffect } from 'react'
import Search from './components/Search'
import { fetchUserData } from './services/githubService'
import './App.css'


function App() {
  useEffect(() => {
    const testFetch = async () => {
      const data = await fetchUserData('octocat');
      console.log('GitHub user data:', data)

    };
    testFetch();
  }, [])

  return (
    <>
    <Search />
    <div>Check user data</div>
    </>
  )
}

export default App;
