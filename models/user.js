const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        senha:{
            type: DataTypes.STRING
        }
    }, {
        tableName: 'users'
    })

    return User
}

module.exports = user