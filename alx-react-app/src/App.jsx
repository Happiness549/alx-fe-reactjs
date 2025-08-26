
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <WelcomeMessage />
            <UserProfile name="Happiness" age="32" bio="Loves coding"/>
        </div>
    );
}

export default App;
