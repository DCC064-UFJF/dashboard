const path = require('path');
const express = require("express");
const cors = require("cors");

const app = express();
const port = 1880;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home2.html'));
  });

app.get('/home2.html', (req, res) => {
    res.redirect('/');
});

app.get('/graphs', (req, res) => {
    res.sendFile(path.join(__dirname, 'graphs2.html'));
});

app.get('/graphs2.html', (req, res) => {
    res.redirect('/graphs');
});

app.get('/scriptGraphs2.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'scriptGraphs2.js'));
});

app.get('/scriptHome2.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'scriptHome2.js'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/output.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'output.css'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});