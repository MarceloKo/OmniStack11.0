const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const { errors } = require('celebrate')

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
