const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Твій JSON ключ

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;
