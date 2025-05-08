// server.js
const express = require('express');
const cors = require('cors');
const db = require('./firebaseConfig'); // firestore db
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST - додати користувача
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

// GET - отримати всіх користувачів
app.get('/api/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
