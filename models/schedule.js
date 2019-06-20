module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
      //name: DataTypes.STRING,
      manager: DataTypes.BOOLEAN,
      employee: DataTypes.BOOLEAN,
      workDate: DataTypes.DATE,
      startHour: DataTypes.TIMESTAMP,
      endHour: DataTypes.TIMESTAMP
        
    });
    
    Schedule.associate = function(models) {
        Schedule.hasMany(models.Clock, {
          onDelete: "cascade"
        });
      };
    
    return Schedule;
  };