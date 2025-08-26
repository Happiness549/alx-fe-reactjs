
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header />
            < MainContent />
            <Footer />
            <WelcomeMessage />
        </div>
    );
}

export default App;
