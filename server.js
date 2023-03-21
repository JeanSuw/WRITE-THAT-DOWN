const express = require('express');
const fs = require('fs'); // Imported fs to write to db.json file
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const note_db = require('./assets/db/db.json');

// Use middleware to parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

function createNote(currentNote, noteList){
    const newNote = currentNote;
    noteList.push(newNote);
    const noteData = JSON.stringify(noteList);
    fs.writeFile(path.join(__dirname, './assets/db/db.json'), noteData);
}

app.get('/api/notes', (req, res) => {
    res.json(note_db.slice(1));
});

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.post('/api/notes', (req, res) => {
    createNote(req.body, note_db);

});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
