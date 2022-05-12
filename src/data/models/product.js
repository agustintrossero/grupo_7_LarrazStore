module.exports = (sequelize, dataTypes) => {
  let alias = "productos";
  let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre: {
        type: dataTypes.STRING(30),
        allowNull: false
    },
    precio: {
        type: dataTypes.DECIMAL(10,2)
    },
    description: {
        type : dataTypes.TEXT,
        allowNull: false
    },
  image: {
    type: dataTypes.STRING(255),
    allowNull: false,
    },
};
  let config = {
      tableName: "productos",
      timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config)
  Product.associate = (model) => {
    Product.belongsToMany(model.usuarios, {
       as: 'usuarios',
        through: 'usuarios_producto',
        foreignKey: 'id_productos',
        otherKey: 'id_usuario',
        timestamps: false
    })
}
  return Product
};
