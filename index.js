'use strict';
const express = require('express');
const { join } = require('path');
const logger = require('morgan');
const { apiUrl, port } = require('./config');
const app = express();

app.use(express.static(join(__dirname, './public')));

app.use(logger('dev'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: './public'
  });
});

app.listen(port, () => {
  let log = `Listening on port ${port} in ${app.get('env')} mode`
  console.log(log);
});
