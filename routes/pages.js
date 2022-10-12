const express = require('express');
const routepage = express.Router();
const path = require ('path');

routepage.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../Develop/public/index.html')));
routepage.get(`/note`, (req, res) => res.sendFile(path.join(__dirname, '../Develop/public/notes.html')));
module.exports = routepage;