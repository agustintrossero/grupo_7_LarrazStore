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
    Category.associate = (model) => {
        Category.hasMany(model.productos, {
            as:"productos",
            foreignKey: "id_category"
        })
    }


    return Category
}   