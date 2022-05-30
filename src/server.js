const express = require('express');
require('dotenv').config();
const app = require('./api');
const routes = require('./routes');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

const apiRoutes = express.Router();

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

apiRoutes.post('/login', routes.login);

app.use(apiRoutes);

app.listen(port, () => console.log('ouvindo porta', port));
