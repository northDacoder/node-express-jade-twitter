// ROUTES - Get our home page
var path = require("path");

// Default route for home page
exports.index = function(req, res){
  res.render('index', { title: "Twit-Decision"});
};

exports.ping = function(req, res){
  res.send("pong!", 200);
};