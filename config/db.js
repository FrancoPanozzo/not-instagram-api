const Sequelize = require('sequelize')

const connectionConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    pool: {
        max: process.env.DB_MAX || 30,
    },
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'postgres',
}

module.exports = new Sequelize(connectionConfig)
