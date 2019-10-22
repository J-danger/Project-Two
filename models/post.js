module.exports = function(sequelize, DataTypes) {
  
  var Post = sequelize.define("Prices", {
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
    }
  });
  return Post;
  
};
