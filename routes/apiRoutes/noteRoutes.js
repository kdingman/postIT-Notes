const router = require('express').Router();
const fs = require('fs');

const savedNote = require('../../Develop/db/db.json');

const { v4: uuidv4 } = require('uuid');

// GET request
router.get('/notes', (req, res) => {
    res.json(savedNote);
});

// POST Request
router.post('/api/notes', (req, res) => {
    const data = req.body;
    // creating a unique id for the note
    data.id = uuidv4(data.id);

    savedNote.push(data);
    
    fs.writeFile('/db/db.json', JSON.stringify(savedNote), (err) => {
        if(err) {
            res.status(400).send("Please enter a note.");
            return;
        }
        else {
            console.log("Note saved.")
        }
    });
        res.json(true);
});