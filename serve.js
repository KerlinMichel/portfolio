require('dotenv').config()

var express = require('express');
var app = express();

app.use(express.static('./'));

app.use('/api/reddit-sentiment', express.static('./api-demos/snlp'))

app.listen(process.env.PORT)
