const router = require('express').Router();
// const path = require('path');
const fs = require('fs');

let newPost  = require('../../Develop/db/db.json');

// Unique ID creator
const { v4: uuidv4 } = require('uuid');

// GET request
router.get('/notes', (req, res) => {
    res.json(newPost)
});

// POST Request
router.post('/notes', (req, res) => {
    const data = req.body;
    // creating a unique id for the note
    data.id = uuidv4(data.id);

    newPost.push(data);
    
    fs.writeFile('Develop/db/db.json', JSON.stringify(newPost), (err) => {
        if(err) {
            console.log("Oops, something didn't go right.");
        }
        else {
            console.log("YEAH! Note has been saved.")
        }
    });
        res.json(data);
});

// delete the note via the id number
router.delete('notes/:id', (req, res) => {

    const newPostId = req.params.id;

    newPost = newPost.filter((notes, index) => {
        console.log(index)
        return newPostId !== notes.id;
    });
    fs.writeFile('Develop/db/db.json', JSON.stringify(newPost), (err) => {
        if(err)
            console.log("Oops, something didn't go right.");
        
        else {
            console.log("Success, note was deleted.");
        }
    });
        res.json(newPost);
});

module.exports = router;