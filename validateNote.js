const path = require('path');
const fs = require('fs');

// Validate that title and text were entered.
const validateNote = newNote => {

    if(!newNote.title || typeof newNote.title !== 'string') {
        return false;
    }
    if(!newNote.text || typeof newNote.text !== 'string') {
        return false;
    }
    return true;
};

// adding the new note
const addNewNote = (newNote, notes) => {

    notes.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify({ notes }, null, 2));
        return notes;
};

module.exports = { validateNote, addNewNote }