import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsComponent from "./components/PostsComponent"
 import { QueryClient, QueryClientProvider } from 'react-query';

   const queryClient = new QueryClient();

function App() {
  

  return (
    <>
    <h1>React Query Demo</h1>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
