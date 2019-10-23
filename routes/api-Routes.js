// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {

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
                  price: parseFloat(data.last),
                  coin_pair: data.display_symbol,
                  lastDate: data.timestamp    
                };
                $('#averagelast').html(parseFloat(data.last))
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

  app.delete("/delete/", function(req, res) {
    db.Prices.destroy()
      .then(function(dbPrices) {
        res.json(dbPrices);
      });
  });
  
}


// const apis = ["https://api.gemini.com/v1/pubticker/btcusd", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD"]
// const newApis = String.valueOf(apis)
// console.log(newApis)
// Promise.all(newApis,(function(api){    
    
//     return new Promise (function(resolve, reject){
//         axios.get(apis).then(function(apiData){
//             resolve (apiData.data)
//         })
//         .catch(function(err){
//             reject(err)
//         })
//     })
// }))
// .then(function(values){
//     var newValues = String.valueOf(values)
//             res.json(newValues)
//         }).catch(function(err){
//             res.send(`Error Thrown: ${err.message}`)
//         })