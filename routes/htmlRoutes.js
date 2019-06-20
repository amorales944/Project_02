var path = require("path");

module.exports = function(app) {

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  app.get("/sign_in", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/sign_in.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/sign.html"));
  });

  app.get("/directMessage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/directMessage.html"));
  });

  app.get("/messageBoard", function(req, res){
    res.sendFile(path.join(__dirname, "../public/views/messageBoard.html"))
  });

  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/calendar.html"))
  });

  app.get("/settings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/settings.html"))
  });

};