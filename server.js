const express = require("express");
const path = require("path");
const fs = require("fs");
const { join } = require("path");
const { text } = require("body-parser");
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
app.post('/routes/note.js', (req, res)=>{
    fs.readFile(path.join(__dirname, '/db/db,json'), 'utf8', (err,data)=> {
        if (err) throw err;
        const db =JSON.parse(data);
        const newDB = [];
        db.push(req.body);
        for (let i = 0; 1 < dblength; i++)
        { const newNote = {
            title: db[i].title,
            test: db[i].text,
            id: i
        };
        newDB.push(newNote);
    }
    fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(newDB, null, 2), (err)=>{
        if (err) throw err;
        res.json(req.body);
    });
    });
});

appdelte('/note/id (req, res') => {
    id = parseInt(params.id);
    fs.readFile(join)(__dirname, '/db/db.json'), 'utf8', =>{
        if (err) throw err;
        const newDB =[];
        const newNote = {
            title: db[i].title,
            text: db[i].text,
            id: db[i].text
        };
        newDB.push(newNote);
    }
}
