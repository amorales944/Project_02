<<<<<<< HEAD
//establishing dependencies as variables====
var express = require("express");
=======
require("dotenv").config();
const express = require("express");
>>>>>>> 6839aca6ae0c893b49aeb205854708f501be094c

const app = express();

<<<<<<< HEAD
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
app.use(express.static("/public"));
//====================================
//Routes for api and html==================
require("./routes/apiRoutes.js")(app);
//require("./routes/htmlRoutes.js")(app);
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
=======
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
>>>>>>> 6839aca6ae0c893b49aeb205854708f501be094c
