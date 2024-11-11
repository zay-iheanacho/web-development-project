// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the "public" directory

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received submission: ${name}, ${email}, ${message}`);
    res.send('Form submission received!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
