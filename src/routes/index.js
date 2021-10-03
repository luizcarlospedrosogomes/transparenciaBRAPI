const bodyParser = require('body-parser')
const orgaos     = require('./orgaosRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(orgaos)
}