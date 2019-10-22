module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {    
    coin_pair: DataTypes.STRING
  });
  console.log(Todo)
  return Todo;
};
