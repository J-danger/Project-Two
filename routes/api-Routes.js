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

  app.post("/", function(req, res) {
    var newReq = JSON.stringify(req.body)
  console.log(newReq)
  })
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