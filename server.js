var express = require("express");

var app = express();

var PORT = process.env.PORT || 8004;

app.get("/", function(req,res){
    res.send("testing route on PORT" + PORT);
})

app.listen(PORT, function() {
    console.log("app is listening on PORT" + PORT);
})