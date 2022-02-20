const router = require('express').Router();
const path = require('path');
const fs = require('fs');

//  where the notes will be stored
let { notes } = require('../../db/db.json');

// validating text and title were added to add a new note
const { validateNote, addNewNote } = require('../../validateNote');

// Unique ID creator
const { v4: uuidv4 } = require('uuid');

// GET request
router.get('/notes', (req, res) => {
    res.json(notes)
});

// POST Request
router.post('/notes', (req, res) => {
    // creating a unique id
    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    }
    if(!validateNote(newNote)) {

        return res.status(400).send("You must have a title and text to create.");
    }
    else {
        addNewNote(newNote, notes);
        res.json(notes);
    }
});

module.exports = router;