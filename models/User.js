const Sequelize = require('sequelize')


//db instance or connection
const sequelizeDB = require('../utils/db')


//model
const User = sequelize.create('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    salary: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports = User