// Dependencies
const express = require('express');
const fs = require('fs');

// Create the express server
const app = express();

// API Routes

// PORT set up
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Unique ID
const uniqid = require('uniqid');


app.listen(PORT, () => {
    console.log(`postIts-Notes server is ready on port ${PORT}!`);
});