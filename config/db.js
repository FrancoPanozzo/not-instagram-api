const Sequelize = require('sequelize')

const { DB_HOST, DB_PORT, DB_MAX, DB_NAME, DB_USER, DB_PASS } = process.env
const connectionConfig = {
    host: DB_HOST || 'localhost',
    port: DB_PORT || 5432,
    pool: {
        max: DB_MAX || 30,
    },
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    dialect: 'postgres',
}

module.exports = new Sequelize(connectionConfig)
