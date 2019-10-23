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
require("./routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

var p1 = axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', { params: {} })
var p2 = axios.get('https://api.gemini.com/v1/pubticker/btcusd', { params: {} })
var p3 = axios.get('https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT', { params: {} })
var p4 = axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD', { params: {} })
var p5 = axios.get('https://api.kraken.com/0/public/Ticker?pair=XBTUSD', { params: {} })
Promise.all([p1 + p2 + p3 + p4 + p5]).then(function(values) {
    console.log("All Promises have Resolved! Result: " + values);
    console.log(p1 + p2 + p3 + p4 + p5)
})

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

