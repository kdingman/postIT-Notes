const path = require('path');
const fs = require('fs');

const validateNote = newPost => {

    if(!newPost.title || typeof newPost.title !== 'string') {
        return false;
    }
    if(!newPost.text || typeof newPost.text !== 'string') {
        return false;
    }
    return true;
};

const addNewPost = (newPost, notes) => {
    notes.push(newPost);
    fs.writeFile(path.join(__dirname, '../../Develop/db/db.json'), JSON.stringify({ notes }, null, 2));
        return notes;
};

module.exports = { validateNote, addNewPost }