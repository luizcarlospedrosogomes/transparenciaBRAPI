const express   = require('express');
const routes    = require('./src/routes')
const app       = express();

routes(app)

app.listen(9000, () => console.log('Server ativo na porta 9000'));

module.exports = app