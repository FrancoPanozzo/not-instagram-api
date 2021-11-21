// Replace env vars with values
const dotenv = require('dotenv')
dotenv.config({ path: './config/.env' })

const express = require('express')
const cors = require('cors')
const cloudinary = require('./config/cloudinary')

const PORT = process.env.PORT || 3000

//Connect DB
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

app.use(cors())

// Body Parser
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/users', require('./routes/user'))

app.listen(
    PORT,
    console.log(
        `Running in ${process.env.NODE_ENV.toUpperCase()} mode on port: ${PORT}.`
    )
)
