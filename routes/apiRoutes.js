const db = require("../models");

module.exports = function(app){
    app.get("/api/users", function(req, res){
        db.Users.findAll({}).then(function(dbUsers){
            res.json(dbUsers);
        })
    })
}