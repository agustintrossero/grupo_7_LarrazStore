module.exports = (sequelize, dataTypes) => {
    let alias = "categorias"
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,   
        },
        nombre: {
            type: dataTypes.STRING(30)
        }
    }
    let config = {
        tableName: 'categoria',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    return Category
}   