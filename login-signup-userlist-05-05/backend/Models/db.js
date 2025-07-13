// backend/Models/db.js
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error('MONGO_URI is not defined in .env');
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB Connection Error: ', err));
