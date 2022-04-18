const express = require('express')
const httpProxy = require('express-http-proxy')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

var http = require('http');
const app = express()

const catalogServiceProxy = httpProxy('http://localhost:3001');
const moviesServiceProxy = httpProxy('http://localhost:3002');


app.get('/cities', (req, res, next) => {
  catalogServiceProxy(req, res, next);
})
app.get('/movies', (req, res, next) => {
  moviesServiceProxy(req, res, next);
})
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000, () => console.log('API Gateway is running at port 3000'));