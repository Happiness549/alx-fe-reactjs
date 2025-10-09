import { useState } from 'react'
import { BrowserRouer, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import User from "./components/User.jsx";
import Login from "./components/Login.jsx";
import PrivateRoute from "./components/PrivateRouter.jsx";
import './App.css'

function App() {


  return (
  
      <div>
        <h1>Advanced React Router Demo</h1>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        
        <Route path="/user/:userId" element={<User />} />
      </Routes>
      </BrowserRouter>
      </div>
    
  )
}

export default App
