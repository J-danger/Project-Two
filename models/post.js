module.exports = function(sequelize, DataTypes) {
  
  var Prices = sequelize.define("Prices", {
    exchange_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    coin_pair: {
      type: DataTypes.STRING,
      allowNull: false,      
      validate: {
        len: [1]
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,     
      validate: {
        len: [1]
      }
    },
    lastDate: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
   
    

  });
  return Prices;
  
};