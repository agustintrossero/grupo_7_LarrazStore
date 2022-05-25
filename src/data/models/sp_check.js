module.exports = (sequelize, dataTypes) => {
    let alias = 'spCheck'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'sp_check',
        timestamps: false
    }
    let SpCheck = sequelize.define(alias, cols, config)
    SpCheck.associate = (model) => {
        SpCheck.hasMany(model.productos, {
          as: "productos",
          foreignKey: "id_check"
        })
    }


    return SpCheck
}