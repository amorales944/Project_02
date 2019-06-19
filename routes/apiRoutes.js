<<<<<<< HEAD
//requiring db for models routes===
var db = require("../models");
//=================================

module.exports = function(app) {
    app.get("/api", function(req,res) {
        db.work_schedule.findAll({}).then(function(dbwork_schedule) {
            res.json(dbwork_schedule);
    
        });
    });

    //app.get("/api/:id", function(req,res) {
     
    //})

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
=======
const db = require("../models");

module.exports = function(app){
    app.get("/api/users", function(req, res){
        db.Users.findAll({}).then(function(dbUsers){
            console.log(Users);
            res.json(dbUsers);
        })
    })
}
>>>>>>> 6839aca6ae0c893b49aeb205854708f501be094c
