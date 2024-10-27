import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calendar.css'; // Підключаємо CSS

// Функція для отримання кількості днів у місяці
const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

// Функція для отримання першого дня тижня місяця
const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Отримання днів для місяця
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    // Дні для відображення перед початком місяця
    const prevMonthDays = Array.from({ length: firstDay }, (_, i) => '');

    // Дні поточного місяця
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Отримання днів, які заповнюють кінець тижня
    const totalDays = prevMonthDays.length + monthDays.length;
    const nextMonthDays = Array.from(
        { length: 35 - totalDays }, // 42 — 6 тижнів по 7 днів
        (_, i) => ''
    );

    // Функції для зміни місяця
    const prevMonth = () => {
        const newDate = new Date(year, month - 1, 1);
        setCurrentDate(newDate);
    };

    const nextMonth = () => {
        const newDate = new Date(year, month + 1, 1);
        setCurrentDate(newDate);
    };

    // Масиви назв днів тижня і місяців українською
    const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const monthNames = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
    ];

    return (
        <div className='container mt-4 d-flex justify-content-center'>
            <div className='calendar-wrapper'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <button className='btn btn-primary' onClick={prevMonth}>
                        ←
                    </button>
                    <h2 className='text-center'>
                        {monthNames[month]} {year}
                    </h2>
                    <button className='btn btn-primary' onClick={nextMonth}>
                        →
                    </button>
                </div>
                <div className='calendar-grid'>
                    {daysOfWeek.map((day) => (
                        <div key={day} className='day-name'>
                            {day}
                        </div>
                    ))}
                    {prevMonthDays.map((day, index) => (
                        <div
                            key={`prev-${index}`}
                            className='day empty-day'
                        ></div>
                    ))}
                    {monthDays.map((day) => (
                        <div key={day} className='day'>
                            {day}
                        </div>
                    ))}
                    {nextMonthDays.map((day, index) => (
                        <div
                            key={`next-${index}`}
                            className='day empty-day'
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Calendar.css'; // Підключаємо CSS

// // Функція для отримання кількості днів у місяці
// const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
// };

// // Функція для отримання першого дня тижня місяця
// const getFirstDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
// };

// const Calendar = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();

//     // Отримання днів для місяця
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month);

//     // Дні для відображення перед початком місяця
//     const prevMonthDays = Array.from({ length: firstDay }, (_, i) => '');

//     // Дні поточного місяця
//     const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//     // Отримання днів, які заповнюють кінець тижня
//     const totalDays = prevMonthDays.length + monthDays.length;
//     const nextMonthDays = Array.from(
//         { length: 35 - totalDays }, // 42 — 6 тижнів по 7 днів
//         (_, i) => ''
//     );

//     // Функції для зміни місяця
//     const prevMonth = () => {
//         const newDate = new Date(year, month - 1, 1);
//         setCurrentDate(newDate);
//     };

//     const nextMonth = () => {
//         const newDate = new Date(year, month + 1, 1);
//         setCurrentDate(newDate);
//     };

//     return (
//         <div className='container mt-4 d-flex justify-content-center'>
//             <div className='calendar-wrapper'>
//                 <div className='d-flex justify-content-between align-items-center mb-3'>
//                     <button className='btn btn-primary' onClick={prevMonth}>
//                         ←
//                     </button>
//                     <h2 className='text-center'>
//                         {currentDate.toLocaleString('default', {
//                             month: 'long',
//                         })}{' '}
//                         {year}
//                     </h2>
//                     <button className='btn btn-primary' onClick={nextMonth}>
//                         →
//                     </button>
//                 </div>
//                 <div className='calendar-grid'>
//                     {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
//                         (day) => (
//                             <div key={day} className='day-name'>
//                                 {day}
//                             </div>
//                         )
//                     )}
//                     {prevMonthDays.map((day, index) => (
//                         <div
//                             key={`prev-${index}`}
//                             className='day empty-day'
//                         ></div>
//                     ))}
//                     {monthDays.map((day) => (
//                         <div key={day} className='day'>
//                             {day}
//                         </div>
//                     ))}
//                     {nextMonthDays.map((day, index) => (
//                         <div
//                             key={`next-${index}`}
//                             className='day empty-day'
//                         ></div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Calendar;
