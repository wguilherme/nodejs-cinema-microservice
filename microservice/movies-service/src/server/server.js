const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
let server = null

function start(api, repository, callback) {

  const app = express()
  app.use(morgan('dev'))
  app.use(helmet())
  app.use((err, req, res, next) => {
    callback(new Error('Something went wrong!, err: ' + err), null)
    res.status(500).send('Something went wrong!')

  })

  api(app, repository)
  server = app.listen(parseInt(process.env.PORT), () => callback(null, server), () => { console.log('Server is running at port ' + process.env.PORT) })
}

function stop() {
  if (server) server.close()
  return true
}

module.exports = { start, stop }