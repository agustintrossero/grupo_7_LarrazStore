module.exports = (sequelize, dataTypes) => {
    let alias = 'usuarios' 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: dataTypes.STRING(30)
        },
        name: {
            type: dataTypes.STRING(30)
        },
        surname: {
            type: dataTypes.STRING(30)
        },
        email: {
            type: dataTypes.STRING(30)
        },
        password: {
            type: dataTypes.STRING(30)
        },
        legal_buy: {
            type: dataTypes.INTEGER
        },
        avatar: {
            type: dataTypes.STRING(255),
            allowNull: false,
            },
        isAdmin: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'usuarios',
        timestamps: false
    }
    let User = sequelize.define(alias, cols, config)

    User.associate = (model) => {
        User.belongsToMany(model.productos, {  
           as: 'productos',
            through: 'usuarios_producto',
            foreignKey: 'id_usuario',
            otherKey: 'id_productos',
            timestamps: false
        })
    }

    return User
}