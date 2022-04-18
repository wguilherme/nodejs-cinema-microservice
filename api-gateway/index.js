require('dotenv-safe').config();
const jwt = require('jsonwebtoken')
const express = require('express')
const httpProxy = require('express-http-proxy')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

var http = require('http');
const app = express()
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const catalogServiceProxy = httpProxy('http://localhost:3001');
const moviesServiceProxy = httpProxy('http://localhost:3002');




app.post('/login', (req, res, next) => {

  if (req.body.user === 'app@app.com' && req.body.password === '12345678') {
    const id = 1
    //expires in 5min
    const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: 300 })
    res.status(200).send({ auth: true, token: token })
  } else {

    res.status(500).send('Invalid user credentials')
  }
})


app.get('/cities', (req, res, next) => {
  catalogServiceProxy(req, res, next);
})
app.get('/movies', (req, res, next) => {
  moviesServiceProxy(req, res, next);
})


var server = http.createServer(app);
server.listen(3000, () => console.log('API Gateway is running at port 3000'));