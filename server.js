// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
const axios = require('axios');
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// Routes
// =============================================================
require("./routes/api-Routes.js")(app);


app.get("/test", function (req, res){
    axios.get("https://api.coinbase.com/v2/prices/:USD_BTC/buy").then(function(data){
    res.json(data)
    })
})

  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });

  app.post('/', function(req, res, next) {
    // Handle the post for this route
  })

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

//calebs on click for the animations and search
$("#btn").click(function() {
  $('.history').toggleClass('keyframes');
});