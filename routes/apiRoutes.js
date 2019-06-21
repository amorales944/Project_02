
//requiring db for models routes===
var db = require("../models");


module.exports = function(app) {
    app.get("/api", function(req,res) {
        db.work_schedule.findAll({}).then(function(dbwork_schedule) {
            res.json(dbwork_schedule);
    
        });
    });

    app.post("/api/employees", function(req,res){
     db.work_schedule.create(req.body).then(function(dbwork_schedule) {
         res.json(dbwork_schedule)
     });   
    });

    app.delete("/api/employees/:id", function(req,res){
      db.work_schedule.destroy({
          where:{
              id: req.params.id
          }
      })  
    })
};

