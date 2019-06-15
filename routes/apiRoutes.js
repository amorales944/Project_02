//requiring db for models routes===
var db = require("../models");
//=================================

module.exports = function(app) {
    app.get("/api", function(req,res) {
        db.work_schedule.findAll({}).then(function(dbwork_schedule) {
            res.json(dbwork_schedule);
    
        });
    });

   // app.get("/api/")
};
