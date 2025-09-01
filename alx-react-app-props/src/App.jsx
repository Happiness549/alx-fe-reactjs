
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';



function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <WelcomeMessage />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>

             <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
        </div>
    );
}

export default App;
