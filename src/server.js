const express = require('express');
require('dotenv').config();
const app = require('./api');
const routes = require('./routes');
// const validateJWT = require('./middlewares/validateJWT');
const middlewareError = require('./middlewares/Error');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

const apiRoutes = express.Router();

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

apiRoutes.post('/login', routes.login);
apiRoutes.post('/user', routes.create);

app.use(apiRoutes);
app.use(middlewareError);

app.listen(port, () => console.log('ouvindo porta', port));
