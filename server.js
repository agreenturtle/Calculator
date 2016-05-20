// server.js
// =====================================================================

// BASE SETUP
// =====================================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.set("views", __dirname + "/views");

// SET ENGINE TEMPLATE
// =====================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(express.static(__dirname + "/public"));

// PASSWORDS
// =====================================================================


// START SERVER
// ===========================================================================
var port = process.env.PORT || 7070;
app.listen(port);
console.log("Express server listening on port " + port);
app.get("/",function(req,res){
  res.sendfile("index.html")
});
