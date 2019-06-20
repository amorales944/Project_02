module.exports = function(sequelize, Datatypes) {
    var Clock = sequelize.define("Clock", {
        name: Datatypes.STRING,
        clockIn: Datatypes.TIMESTAMP,
        clockOut: Datatypes.TIMESTAMP
    });

    
}