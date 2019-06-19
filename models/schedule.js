module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
      name: DataTypes.STRING,
      workDate: DataTypes.DATETIME,
      startHour: DataTypes.DATETIME,
      endHour: DataTypes.DATETIME
        
    });
    
    Schedule.associate = function(models) {
        Schedule.hasMany(models.Post, {
          onDelete: "cascade"
        });
      };
    
    return Schedule;
  };