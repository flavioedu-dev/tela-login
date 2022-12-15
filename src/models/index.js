const sequelizeConfig = require('../config/sequelize') // Sequelize configurado
const Sequelize = require('sequelize') // Sequelize dependência
const User = require('./user') // Model

const user = User(sequelizeConfig, Sequelize.DataTypes)

const db = {
    user,
    sequelizeConfig
}

module.exports = db