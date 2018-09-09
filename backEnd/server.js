require('./config/config');
require('./models/db');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const routes = require('./controllers/student.controller');

app.use('/', routes);

app.listen(4000, () => console.log('Express server running on port 4000'));