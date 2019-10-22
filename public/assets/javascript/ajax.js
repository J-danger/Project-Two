$(document).ready(function() {
    
 
  
  var api1 =  $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
        
        // var btcAverageLast = response.last    
        // console.log("BTC average: " + btcAverageLast) 
        // $("#averageLast").html(btcAverageLast)
        
        var newCoin = {
            coin_pair: response.display_symbol,
            price: parseInt(response.last),
            time: response.timestamp        
        };    
                 
        
        $.post("/", newCoin, function (results){
           
        })   
    }})
    
    var api2 =  $.ajax({url: "https://api.gemini.com/v1/pubticker/btcusd", success: function(response){
        
        var newCoin = {
            coin_pair: "BTC-USD",
            price: parseInt(response.last),
            time: response.volume.timestamp        
        };  
        
        $.post("/", newCoin, function (results){
           
        })  
    }});
    var api3 =  $.ajax({url: "http://cors-anywhere.herokuapp.com/https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT", success: function(response){
        
        var d = new Date();
        var n = d.getTime();
        var newCoin = {
            coin_pair: "BTC-USD",
            price: parseInt(response.price),
            time: n,          
            
        };  
        
        $.post("/", newCoin, function (results){
           
        })  
    }});
    
    var api4 =   $.ajax({url: "https://api.coinbase.com/v2/prices/spot?currency=USD", success: function(response){
        
        var d = new Date();
        var n = d.getTime();
        var newCoin = {
            coin_pair: response.data.base + "-" + response.data.currency,
            price: parseInt(response.data.amount),
            time: n
            
        };  
       
        $.post("/", newCoin, function (results){
           
        })  
        
    }}); 
    
    var api5 =  $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", success: function(response){
        
        var d = new Date();
        var n = d.getTime();
        
        var newCoin = {
            coin_pair: "BTC-USD",
            price: parseInt(response.result.XXBTZUSD.b[0]),
            time: n,  
            
        };  
        
        $.post("/", newCoin, function (results){
            
        })  
        
    }});        
    
    $.when(api1, api2, api2, api4, api5).done(function(average, gemini, binance, coinbase, kraken){
        console.log(average[0].last)
        console.log(gemini[0].last)
        console.log(binance[0].last)
        console.log(coinbase[0].data.amount)
        console.log(kraken[0].result.XXBTZUSD.o)
    })
    // submitPrices();
 
    })