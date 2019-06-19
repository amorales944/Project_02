const db = require("../models");

module.exports = function(app){
    app.get("/api/users", function(req, res){
        db.Users.findAll({}).then(function(dbUsers){
            console.log(Users);
            res.json(dbUsers);
        })
    })
}