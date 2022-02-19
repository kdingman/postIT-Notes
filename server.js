// Dependencies
const express = require('express');

// Create the express server
const app = express();

// PORT set up
const PORT = process.env.PORT || 3001;

// API Routes
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use API Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listner
app.listen(PORT, () => {
    console.log(`postIts-Notes server is ready on port ${PORT}!`);
});