const express = require('express');
const routepage = express.Router();
const path = require ('path');

routepage.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../public/index.html')));
routepage.get(`/notes`, (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
module.exports = routepage;