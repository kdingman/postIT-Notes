const router = require('express').Router();
const fs = require('fs');

const savedNote = require('../../Develop/db/db.json');

// Unique ID creator
const { v4: uuidv4 } = require('uuid');

// GET request
router.get('/api/notes', (req, res) => {
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
            res.status(400).send("Oops, something didn't go right.");
            return;
        }
        else {
            console.log("YEAH! Note has been saved.")
        }
    });
        res.json(true);
});

router.delete('/api/notes/:id', (req, res) => {

    const savedNoteId = req.params.id;

    savedNote = savedNote.filter((notes, index) => {
        console.log(index)
        return savedNoteId !== notes.id;
    });
    fs.writeFile('/db/db.json', JSON.stringify(savedNote), (err) => {
        if(err)
            res.status(400).send("Oops, something didn't go right.");
        
        else {
            console.log("Success, note was deleted.");
        }
    });
        res.json(true);
});

module.exports = router;