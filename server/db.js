const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_db';
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.warn('⚠️ MongoDB Connection Error:', err.message);
        console.warn('⚠️ Server will run without database features.');
    }
};

module.exports = { connectDB };
