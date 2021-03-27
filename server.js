const express = require('express')
const colors = require('colors')
const helmet = require('helmet')

const {
  NODE_ENV_OPTIONS,
  EXPRESS_DEFAULT_PORT,
  API_BASE_URI,
} = require('./utils/constants')

const servicesRoute = require('./routes/services')
const { createFakeData } = require('./fake/fake-client-requests')

// the app
const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(helmet())
// END OF MIDDLEWARES

app.use(`${API_BASE_URI}`, servicesRoute)

// SET UP THE LISTENING OF EXPRESS SERVER
const PORT = process.env.PORT || EXPRESS_DEFAULT_PORT
const NODE_ENV = process.env.NODE_ENV || NODE_ENV_OPTIONS.DEV

app.listen(PORT, () =>
  console.log(
    `Express server running at port: ${PORT}, with environment: ${NODE_ENV}`
      .green.bold
  )
)
