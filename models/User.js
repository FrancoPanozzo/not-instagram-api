const Sequelize = require('sequelize')
const db = require('../config/db')

module.exports = db.define(
    'user',
    {
        username: {
            type: Sequelize.STRING,
        },
        first_name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING,
        },
        bio: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        profile_pic: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.STRING,
        },
        DOB: {
            type: Sequelize.DATE,
        },
        country: {
            type: Sequelize.STRING,
        },
        city: {
            type: Sequelize.STRING,
        },
        ui_theme: {
            type: Sequelize.STRING,
        },
    },
    {
        timestamps: false,
    }
)
