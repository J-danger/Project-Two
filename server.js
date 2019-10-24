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


app.get("/api/prices", function (req, res) {
  var d = new Date();
  var timeNow = d.getTime();

  function bitcoin() {
      return new Promise(function(resolve, reject) {
          axios.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
          .then(function(results) {
              var data = results.data;
              
              var dataObj = {
                  exchange_name: "Average",
                  coin_pair: data.display_symbol,
                  price: parseFloat(data.last),
                  lastDate: data.timestamp    
              };
              resolve(dataObj);
          }) 
      })
  }

  function gemini() {
      return new Promise(function(resolve, reject) {
          axios.get('https://api.gemini.com/v1/pubticker/btcusd')
          .then(function(results) {
              var data = results.data;
              
              var dataObj = {
                  exchange_name: "gemini",
                  coin_pair: "BTC-USD",
                  price: parseFloat(data.last),
                  lastDate: data.volume.timestamp    
              };
              resolve(dataObj);
          }) 
      })
  }

  function binance() {
      return new Promise(function(resolve, reject) {
          axios.get('https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT')
          .then(function(results) {
              var data = results.data;

              var dataObj = {
                  exchange_name: "binance",
                  coin_pair: "BTC-USD",
                  price: parseFloat(data.price),
                  lastDate: timeNow   
              };
              resolve(dataObj);
          }) 
      })
  }

  function coinbase() {
      return new Promise(function(resolve, reject) {
          axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD')
          .then(function(results) {
              var data = results.data;
              
              var dataObj = {
                  exchange_name: "coinbase",
                  coin_pair: "BTC-USD",
                  price: parseFloat(data.data.amount),
                  lastDate: timeNow   
              };
              resolve(dataObj);
          }) 
      })
  }

  function kraken() {
      return new Promise(function(resolve, reject) {
          axios.get('https://api.kraken.com/0/public/Ticker?pair=XBTUSD')
          .then(function(results) {
              var data = results.data;
              
              var dataObj = {
                  exchange_name: "kraken",
                  coin_pair: "BTC-USD",
                  price: parseFloat(data.result.XXBTZUSD.o),
                  lastDate: timeNow   
              };
              resolve(dataObj);
          }) 
      })
  }

  Promise.all([bitcoin(), gemini(), binance(), coinbase(), kraken()]).then(function (response) {
      console.log(response)
      db.Prices.bulkCreate(response).then(function(response) {
          // console.log(response);
          res.json(response);
      }).catch(function(err) {
          res.status(500).end();
      })

  })
})


// Routes
// =============================================================
require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


