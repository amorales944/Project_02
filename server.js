//establishing dependencies as variables====
var express = require("express");

var app = express();
//==========================================
var PORT = process.env.PORT || 8004;

//var db = require ("./models");

app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.use(express.static("public"));

//Routes for api and html==================
require("./app/routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

require("./routes/post-api-routes.js")(app);
//==========================================

app.get("/", function(req,res){
    res.send("testing route on PORT" + PORT);
});

db.sequelize.sync({force: true }).then(function(){
    app.listen(PORT, function() {
        console.log("app is listening on PORT" + PORT);
    });
});
