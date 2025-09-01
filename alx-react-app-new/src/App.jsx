
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <WelcomeMessage />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
            <Counter />
        </div>
    );
}

export default App;
