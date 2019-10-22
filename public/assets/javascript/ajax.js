// module.exports = function(sequelize, DataTypes) {
//     var Post = sequelize.define("Post", {
//         btcAverageLast: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       body: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       category: {
//         type: DataTypes.STRING,
//         defaultValue: "Personal"
//       }
//     });
//     return Post;
//   };
$(document).ready(function(data) {

    function prices(req, res){
        
        $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
            
            var btcAverageLast = response.last    
            console.log("BTC average: " + btcAverageLast) 
            $("#averageLast").html(btcAverageLast)
       
        }});
        
        $.ajax({url: "https://api.gemini.com/v1/pubticker/btcusd", success: function(response){
       
            var btcGeminiLast = response.last    
            console.log("Gemini: " + btcGeminiLast) 
            $("#geminiLast").html(btcGeminiLast)
        }});
        
        $.ajax({url: "http://cors-anywhere.herokuapp.com/https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT", success: function(response){
             var btcBinanceLast = response.price
            console.log("Binance: " + btcBinanceLast)
            $("#binanceLast").html(btcBinanceLast)
            // var btcLast = response.last    
            //     console.log("BTC average: " + btcLast)  S          
        }});
        
        $.ajax({url: "https://api.coinbase.com/v2/prices/spot?currency=USD", success: function(response){
            var btcCoinbaseLast = response.data.amount
            console.log("Coinbase: " + btcCoinbaseLast);
            $("#coinbaseLast").html(btcCoinbaseLast);        
         
        }}); 

        $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", success: function(response){
            
             btcKrakenLast = response.result.XXBTZUSD.b[0]    
            console.log("Kraken: " + btcKrakenLast) 
            $("#krakenLast").html(btcKrakenLast)
            
        }});        
    }
    
    prices();
    console.log(data)
})


