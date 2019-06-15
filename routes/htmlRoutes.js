const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res){
        db.Schedule.findAll({}).then(function(dbSchedule){
            res.render("index", {
                
            })
        })
    })
}