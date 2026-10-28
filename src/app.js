const express = require('express');
const bodyParser = require('body-parser');
const soapRouter = require('./routes/soap.routes');

const app = express();

app.disable('x-powered-by');

app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));

app.use(soapRouter);

module.exports = app;