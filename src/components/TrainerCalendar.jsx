// TrainerCalendar.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TrainerCalendar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrainerCalendar = ({ trainerName }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [appointments, setAppointments] = useState([]);

  const storageKey = `appointments-${trainerName}`;

  // Завантаження з localStorage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setAppointments(JSON.parse(saved));
    }
  }, [storageKey]);

  // Збереження в localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(appointments));
  }, [appointments, storageKey]);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Виберіть дату і час!');
      return;
    }

    const newAppointment = {
      date: selectedDate.toLocaleDateString(),
      time: selectedTime
    };

    setAppointments((prev) => [...prev, newAppointment]);
    setSelectedDate(null);
    setSelectedTime('');
    toast.success('Запис підтверджено!');
  };

  const handleDelete = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
    toast.info('Запис видалено');
  };

  return (
    <div className="calendar-container">
      <h2>{trainerName}</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />

      {selectedDate && (
        <div className="time-picker">
          <label>Оберіть час:</label>
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">-- Час --</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
          </select>

          <button className="confirm-btn" onClick={handleConfirm}>Підтвердити запис</button>
        </div>
      )}

      <div className="appointments">
        <h4>Ваші записи:</h4>
        <ul>
          {appointments.map((appt, i) => (
            <li key={i}>
              {appt.date} о {appt.time}
              <button className="delete-btn" onClick={() => handleDelete(i)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default TrainerCalendar;
