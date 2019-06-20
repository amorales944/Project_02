module.exports = function(sequelize, Datatypes) {
    var Clock = sequelize.define("Clock", {
        name: Datatypes.STRING,
        in: Datatypes.TIMESTAMP,
        out: Datatypes.TIMESTAMP,
        lunch: Datatypes.TIMESTAMP
    });

    
}