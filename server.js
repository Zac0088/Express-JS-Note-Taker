const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.static)
