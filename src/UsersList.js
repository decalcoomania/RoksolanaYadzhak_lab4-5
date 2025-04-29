import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Використовуємо axios для запитів до API

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // Для зберігання помилок

  useEffect(() => {
    // Робимо запит до API для отримання користувачів
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        // Якщо запит успішний, зберігаємо дані у стейт
        setUsers(response.data);
      })
      .catch(error => {
        // Обробка помилок
        console.error('Error fetching users:', error);
        setError('Failed to load users');
      });
  }, []); // Запит виконується тільки при монтуванні компонента

  return (
    <div>
      <h1>Users List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Якщо є помилка, виводимо її */}
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <p>No users found</p> // Якщо користувачів немає
        )}
      </ul>
    </div>
  );
};

export default UsersList;
