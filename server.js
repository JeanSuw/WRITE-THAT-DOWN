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




