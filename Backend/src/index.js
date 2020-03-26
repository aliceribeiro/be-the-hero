const express = require('express'); //está importando o módulo 'express' para a variável 'express'; assim, a variável passa a conter todas as funcionalidades do módulo express
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //é uma porta localhost no chrome