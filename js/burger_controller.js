var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgObj = {
      burgers: data
    };
    res.render('index', burgObj);
  });
});

router.post("/", function (req, res) {
  burger.insertOne({
    burger_name: req.body.burger_name,
    devoured: false
  }, function () {
      res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
     devoured: req.body.devoured
  }, condition, function () {
    res.redirect("/");
  });
});


module.exports = router;
