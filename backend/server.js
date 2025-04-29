const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./firebaseConfig'); // підключення до Firestore
const PORT = process.env.PORT || 5000;


// Середовища
app.use(cors());
app.use(express.json());

// Маршрут для додавання користувача (логін: email + password)
app.post('/api/users', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }

    await db.collection('users').add({ email, password });
    res.status(201).send('User added');
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send(error.message);
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
