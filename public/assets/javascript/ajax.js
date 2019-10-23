$(document).ready(function() {
    
    // var api1 =  $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
         
    // }})
    
    // var api2 =  $.ajax({url: "https://api.gemini.com/v1/pubticker/btcusd", success: function(response){
     
    // }});
    // var api3 =  $.ajax({url: "http://cors-anywhere.herokuapp.com/https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT", success: function(response){
       
    // }});
    
    // var api4 =  $.ajax({url: "https://api.coinbase.com/v2/prices/spot?currency=USD", success: function(response){
      
    // }}); 
    
    // var api5 =  $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", success: function(response){
      
    // }});        
    
    // $.when(api1, api2, api3, api4, api5).done(function(average, gemini, binance, coinbase, kraken){
        
        
    //     var d = new Date();
    //     var timeNow = d.getTime();
    //      average =        {
    //         exchange_name: "Average",
    //         coin_pair: "BTC-USD",
    //         price: parseInt(average[0].last),
    //         lastTime: average[0].timestamp        
    //     };   
    //     console.log("Average: ",average)
    //     $.post("/", average, function (results){
            
    //     })  
    //     gemini =  {
    //         exchange_name: "gemini",
    //         coin_pair: "BTC-USD",
    //         price: parseInt(gemini[0].last)  ,
    //         lastTime: gemini[0].volume.timestamp        
    //     };   
    //     console.log("Gemini: ",gemini)
    //     $.post("/", gemini, function (results){
            
    //     })        
    //     binance = {
    //         exchange_name: "binance",
    //         coin_pair: "BTC-USD",
    //         price: parseInt(binance[0].last),
    //         lastTime: timeNow       
    //     };   
    //     console.log("Binance: ",binance)
    //     $.post("/", binance, function (results){
            
    //     })  
    //     coinbase = {
    //         exchange_name: "coinbase",
    //         coin_pair: "BTC-USD",
    //         price: parseInt(coinbase[0].data.amount),
    //         lastTime: timeNow      
    //     };   
    //     console.log("Coinbase: ",coinbase)     
    //     $.post("/", coinbase, function (results){
            
    //     })   
    //     kraken = {
    //         exchange_name: "kraken",
    //         coin_pair: "BTC-USD",
    //         price: parseInt(kraken[0].result.XXBTZUSD.o) ,
    //         lastTime: timeNow,    
    //     };   
    //     console.log("Kraken: ", kraken)  
    //     $.post("/", kraken, function (results){            
    //     }) .then(function(data){
    //         console.log(data)
    //     })   
    // }).then(function(average){   
    //     console.log("this one: ",average)    
    //     $.post("/", average, function (results){
    //         if (err) throw err;
    //     })
    // }).then(function(gemini){
    //     $.post("/", gemini, function (results){
    //         if (err) throw err;
    //     })
    // }).then(function(binance){
    //     $.post("/", binance, function (results){
    //         if (err) throw err;
    //     })
    // }).then(function(coinbase){
    //     $.post("/", coinbase, function (results){
    //         if (err) throw err;
    //     })
    // }).then(function(kraken){
    //     $.post("/", kraken, function (results){
    //         if (err) throw err;
    //     })
    // })
})