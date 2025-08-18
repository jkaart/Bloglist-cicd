const dummyRouter = require('express').Router()

dummyRouter.get('/', (request, response) => {
  response.send('1')
})

module.exports = dummyRouter
