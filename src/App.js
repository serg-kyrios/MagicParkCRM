// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import Clock from './components/Clock'; // Імпортуємо Clock
import Calendar from './components/Calendar';
import BookingForm from './components/BookingForm';
function App() {
    return (
        <React.StrictMode>
            <div className='App'>
                <Header />
                <Clock /> {/* Додаємо компонент Clock */}
                <div className='container'>
                    <h1 className='text-center mt-4'>
                        Мій адаптивний календар на Bootstrap
                    </h1>
                    <Calendar />
                </div>
                <div>
                    <BookingForm />
                </div>
                <Main />
                <Footer />
            </div>
        </React.StrictMode>
    );
}

export default App;
