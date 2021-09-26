const express = require('express')
const dotenv = require('dotenv')

// Load config
dotenv.config({ path: './config/.env' })

const PORT = process.env.PORT || 3000

// App init
const app = express()

app.listen(
    PORT,
    console.log(
        `Running in ${process.env.NODE_ENV.toUpperCase()} mode on port: ${PORT}.`
    )
)
