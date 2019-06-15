//establishing dependencies as variables====
var express = require("express");

var app = express();

//==========================================

//establishing  a secure port ======
var PORT = process.env.PORT || 8004;
//==================================

//establishing db as a variable to require model route==
var db = require ("./models");


//======================================================

//set up express to handle data parsing====
app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.text());

//Static directory=====================
app.use(express.static("app/public"));
//====================================
//Routes for api and html==================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
//require("./routes/post-api-routes.js")(app);
//==========================================

app.get("/", function(req,res){
    res.send("testing route on PORT" + PORT);
});

db.sequelize.sync({force: true }).then(function(){
    app.listen(PORT, function() {
        console.log("app is listening on PORT" + PORT);
    });
});
