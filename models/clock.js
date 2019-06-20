module.exports = function(sequelize, DataTypes) {
    var Clock = sequelize.define("Clock", {
      employee: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      clockIn: {
        type: DataTypes.TIMESTAMP,
        allowNull: false,
        len: [1]
      },
      clockOut: {
          type: DataTypes.TIMESTAMP,
          allowNull: false,
          len:[1]
      },
      lunch: {
          type: DataTypes.TIMESTAMP,
          allowNull: false,
          len:[1]
      }
    });
  
    Clock.associate = function(models) {
     
      Clock.belongsTo(models.Schedule, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Clock;
  };