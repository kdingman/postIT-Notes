// Dependencies
const express = require('express');
const fs = require('fs');

// Create the express server
const app = express();

// API Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// PORT set up
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listner
app.listen(PORT, () => {
    console.log(`postIts-Notes server is ready on port ${PORT}!`);
});