const express = require('express')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './config/.env' })

const PORT = process.env.PORT || 3000

//Import DB
const db = require('./config/db')

db.authenticate()
    .then(() => {
        console.log('DB Connected')
    })
    .catch((err) => {
        console.log(err)
    })

// App init
const app = express()

app.listen(
    PORT,
    console.log(
        `Running in ${process.env.NODE_ENV.toUpperCase()} mode on port: ${PORT}.`
    )
)
