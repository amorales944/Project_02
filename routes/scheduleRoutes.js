const db = require("../models");

module.exports = function(app) {
  app.get("/api/schedule", function(req, res) {
    db.Schedule.findAll({
      include: [db.Clock]
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  app.get("/api/schedule/:id", function(req, res) {
    db.SchedulefindOne({
      where: {
        id: req.params.id
      },
      include: [db.Clock]
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  app.post("/api/schedule", function(req, res) {
    db.Schedule.create(req.body).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  app.delete("/api/Schedule/:id", function(req, res) {
    db.Scheduledestroy({
      where: {
        id: req.params.id
      }
    }).then(function(db) {
      res.json(db);
    });
  });

};