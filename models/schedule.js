module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    
    Schedule.associate = function(models) {
        Schedule.hasMany(models.Post, {
          onDelete: "cascade"
        });
      };
    
    return Schedule;
  };