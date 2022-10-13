const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const uuid = require('uuid');
const { parse } = require('path');

function jsonWriter(jsobject) {
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(jsobject), err => {
        if (err) {
            console.log("Error adding file:", err);
        } else {
            console.log("Added file");
        }

    });
}

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, jsonstring) => {
        if (err) {
            console.log("Error reading the filke;", err);
            return
        }
        try {
            const notes = JSON.parse(jsonstring);
            console.log("existing notes include:", notes);
            res.json(notes);
        }
        catch (err) {
            console.log("Failed parsing JSON:",)
        }

    })
});

router.post('/', (req, res) => {
    const newnote = req.body;
    newnote.id = uuid.v4();

    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, jsonstring) => {
        if (err) {
            console.log("File read error:", err);
            return;
        }
        try {
            const notes = JSON.parse(jsonstring);
            notes.push(newnote);
            console.log("saved notes:", notes);
            jsonWriter(notes);
            res.json(notes);
        }
            catch (err) {
                console.log("Error parsing string", err);
            }


        })
})
