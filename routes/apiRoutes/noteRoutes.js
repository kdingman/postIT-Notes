const router = require('express').Router();
const path = require('path');
const fs = require('fs');

let noteData  = require('../../Develop/db/db.json');

// Unique ID creator
const { v4: uuidv4 } = require('uuid');

// GET request
router.get('/notes', (req, res) => {
    res.json(noteData)
});

// POST Request
router.post('/notes', (req, res) => {
    const data = req.body;
    // creating a unique id for the note
    data.id = uuidv4(data.id);

    noteData.push(data);
    
    fs.writeFile('/db/db.json', JSON.stringify(noteData), (err) => {
        if(err) {
            res.status(400).send("Oops, something didn't go right.");
        }
        else {
            console.log("YEAH! Note has been saved.")
        }
    });
        res.json(data);
});

// delete the note via the id number
router.delete('/notes/:id', (req, res) => {

    const noteDataId = req.params.id;

    noteData = noteData.filter((notes, index) => {
        console.log(index)
        return noteDataId !== notes.id;
    });
    fs.writeFile('/db/db.json', JSON.stringify(noteData), (err) => {
        if(err)
            res.status(400).send("Oops, something didn't go right.");
        
        else {
            console.log("Success, note was deleted.");
        }
    });
        res.json(noteData);
});

module.exports = router;