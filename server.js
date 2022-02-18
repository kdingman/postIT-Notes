const express = require('express');
const app = express();

// Unique ID
const uniqid = require('uniqid');


app.listen(3001, () => {
    console.log('postIt-Notes server now on port 3001!');
});