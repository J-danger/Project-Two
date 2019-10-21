function prices(){
        
    $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
        
        var btcLast = response.last    
        console.log("BTC average: " + btcLast) 
   
    }});
    
    $.ajax({url: "https://api.gemini.com/v1/pubticker/btcusd", success: function(response){
   
        var btcLast = response.last    
        console.log("Gemini: " + btcLast) 
        
    }});
    
    $.ajax({url: "http://cors-anywhere.herokuapp.com/https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT", success: function(response){
        console.log("Binance: " + response.price)
        // var btcLast = response.last    
        //     console.log("BTC average: " + btcLast)  S          
    }});
    
    $.ajax({url: "https://api.coinbase.com/v2/prices/:USD_BTC/buy", success: function(response){
        console.log(response)
        // var btcLast = response.data.amount    
        //     console.log("BTC average: " + btcLast) 
        
    }});
    
    $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", success: function(response){
        
        var btcLast = response.result.XXBTZUSD.b[0]    
        console.log("Kraken: " + btcLast) 
        
    }});
    
    
}

prices();
