const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/assets/index.html'));
});
app.get('/public/assets/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'));
});
app.get('/routes/notes.js', (req, res)=>{
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf8', (err, data)=>{
        if (err) throw err;
        res.json(JSON.parse(data));
    });

});

