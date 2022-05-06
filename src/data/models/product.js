module.exports = (sequelize, dataTypes) => {
  let alias = "productos";
  let cols = {
    id: {
        type: dataTypes.INT(11),
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
    descripcion: {
        type : dataTypes.TEXT,
        allowNull: false
    },
/*  image: {

    },
*/  
    
    
    

  };
  let config = {};
};
