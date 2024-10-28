import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingForm';
const BookingForm = () => {
    const [clientName, setClientName] = useState('');
    const [attraction, setAttraction] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [pricePerMinute, setPricePerMinute] = useState(5);
    const [totalCost, setTotalCost] = useState(0);
    const [timer, setTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0); // Час, що залишився в секундах
    const [timerActive, setTimerActive] = useState(false);

    // Функція для підрахунку вартості
    const calculateCost = () => {
        const durationMinutes = parseInt(duration, 10);
        const cost = durationMinutes * pricePerMinute;
        setTotalCost(cost);
    };

    // Функція запуску таймера
    const startTimer = () => {
        const durationMinutes = parseInt(duration, 10);
        setTimeLeft(durationMinutes * 60); // Конвертуємо в секунди
        setTimerActive(true);
    };

    // Оновлення таймера
    useEffect(() => {
        if (timerActive && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval); // Очистка інтервалу
        } else if (timeLeft === 0 && timerActive) {
            alert('Оплачений час закінчився!');
            setTimerActive(false);
        }
    }, [timeLeft, timerActive]);

    // Відправка даних на сервер
    const handleSubmit = async (e) => {
        e.preventDefault();
        calculateCost();

        const bookingData = {
            clientName,
            attraction,
            time,
            duration,
            totalCost,
        };

        try {
            const response = await fetch(
                'https://your-server-url.com/api/booking',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            if (response.ok) {
                alert('Запис успішно створено!');
                startTimer(); // Запускаємо таймер після успішної відправки даних
            } else {
                alert('Помилка при створенні запису.');
            }
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    return (
        <div className='container my-4'>
            <h2>Запис на атракціон</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='clientName' className='form-label'>
                        Ім'я клієнта
                    </label>
                    <div className='row justify-content-center'>
                        {' '}
                        {/* Вирівнювання по центру */}
                        <div className='col-12 col-md-6 col-lg-4 mx-auto'>
                            {' '}
                            {/* Центруємо контейнер з input */}
                            <input
                                type='text'
                                className='form-control '
                                id='clientName'
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='attraction' className='form-label'>
                        Назва атракціону
                    </label>
                    <div className='row justify-content-center'>
                        {' '}
                        {/* Вирівнювання по центру */}
                        <div className='col-12 col-md-6 col-lg-4 mx-auto'>
                            {' '}
                            {/* Центруємо контейнер з input */}
                            <input
                                type='text'
                                className='form-control'
                                id='attraction'
                                value={attraction}
                                onChange={(e) => setAttraction(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='time' className='form-label'>
                        Час початку
                    </label>
                    <div className='row justify-content-center'>
                        {' '}
                        {/* Вирівнювання по центру */}
                        <div className='col-12 col-md-6 col-lg-4 mx-auto'>
                            {' '}
                            {/* Центруємо контейнер з input */}
                            <input
                                type='time'
                                className='form-control'
                                id='time'
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='duration' className='form-label'>
                        Тривалість (хвилини)
                    </label>
                    <div className='row justify-content-center'>
                        {' '}
                        {/* Вирівнювання по центру */}
                        <div className='col-12 col-md-6 col-lg-4 mx-auto'>
                            {' '}
                            {/* Центруємо контейнер з input */}
                            <input
                                type='number'
                                className='form-control'
                                id='duration'
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Записатися
                </button>
            </form>
            {totalCost > 0 && (
                <div className='alert alert-info mt-3'>
                    Загальна вартість: {totalCost} грн
                </div>
            )}

            {/* Таймер */}
            {timerActive && (
                <div className='alert alert-warning mt-3'>
                    Час, що залишився: {Math.floor(timeLeft / 60)} хв{' '}
                    {timeLeft % 60} сек
                </div>
            )}
        </div>
    );
};

export default BookingForm;
