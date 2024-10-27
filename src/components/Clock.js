//  Clock;
import React, { useState, useEffect } from 'react';
import './Clock.css'; // Імпортуємо стилі для компонента

function Clock() {
    const [time, setTime] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const timerID = setInterval(() => updateClock(), 1000);

        return () => clearInterval(timerID);
    }, []);

    const updateClock = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        setTime({ hours, minutes, seconds });
    };

    return (
        <div className='container '>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <div className='card text-center bg-dark text-white shadow-lg'>
                        <div className='card-body'>
                            <h1 className='card-title'>Поточний час:</h1>
                            <h2 id='currentTime' className='display-4'>
                                {time.hours}:{time.minutes}:{time.seconds}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;
