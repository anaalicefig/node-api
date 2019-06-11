const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app 
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true
}).then(() => {
    console.log('OK!')
}).catch(err => {
    console.log('Não conectou: ', err);
});

requireDir("./src/models");

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);