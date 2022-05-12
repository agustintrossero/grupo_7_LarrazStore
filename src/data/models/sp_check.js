module.exports = (sequelize, dataTypes) => {
    let alias = 'sp_check'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        producto: {
            type: dataTypes.INTEGER,
        },
        servicio: {
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        tableName: 'sp_check',
        timestamps: false
    }
    let SpCheck = sequelize.define(alias, cols, config)

    SpCheck.associate = model => {
        SpCheck.belongsTo(model.categorias, {
            as: 'Servicios',
            foreignKey: "id_categoria"
        })
    }

    return SpCheck
}