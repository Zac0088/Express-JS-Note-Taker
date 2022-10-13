const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const uuid = require('uuid');

function jsonWriter(jsobject) {
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(jsobject), err => {
        if (err) {
            console.log("Error adding file:", err);
        } else {
            console.log("Added file");
        }
        
    });
}

router.get('/', (req, res) =>{
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, jsonstring)=>{
        if (err) {
            console.log("Error reading the filke;", err);
            return
        }
    })
})
