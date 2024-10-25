// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className='App'>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
