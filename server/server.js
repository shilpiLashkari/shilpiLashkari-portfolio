const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve Angular Static Files
const angularDistPath = path.join(__dirname, '../client/dist/portfolio-app/browser');
app.use(express.static(angularDistPath));

// API Routes (Minimal)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', msg: 'Server is running in static mode' });
});

// Catch-all route to serve Angular index.html
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(angularDistPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
