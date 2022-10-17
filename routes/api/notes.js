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

router.delete('/:id', (req,res)=>{
    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf8', (err, jsonstring)=> {
        if (err) {
            console.log("File read error", err);
            return;
        }
        try{
            const notes = JSON.parse(jsonstring);
            const deletenote = notes.find(note => note.id === req.params.id);
            if (!deletenote) return res.status(404).send('Could not delete request note');
            const index = notes.indexOf(deletenote);
            notes.splice(index,1);
            jsonWriter(notes);

            res.json(deletenote);
        }
        catch (err) {
            console.log("Error parsing string", err);
        }
        
    })
});

module.exports = router;

