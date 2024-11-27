const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(express.json());

app.use(router)

app.get('/', (_req, res) => {
    res.send('Hello World');
});

module.exports = app;