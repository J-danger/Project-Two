
    function prices(){
        
        $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
            
            var btcLast = response.last    
            console.log("BTC average: " + btcLast) 
            $("#averageLast").html(btcLast)
       
        }});
        
        $.ajax({url: "https://api.gemini.com/v1/pubticker/btcusd", success: function(response){
       
            var btcLast = response.last    
            console.log("Gemini: " + btcLast) 
            $("#geminiLast").html(btcLast)
        }});
        
        $.ajax({url: "http://cors-anywhere.herokuapp.com/https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT", success: function(response){
             var btcLast = response.price
            console.log("Binance: " + response.price)
            $("#binanceLast").html(btcLast)
            // var btcLast = response.last    
            //     console.log("BTC average: " + btcLast)  S          
        }});
        
        $.ajax({url: "https://api.coinbase.com/v2/prices/spot?currency=USD", success: function(response){
            var btcLast = response.data.amount
        console.log("coinbase" + response.data.amount);
            $("#coinbaseLast").html(btcLast)
           
            // var btcLast = response.data.amount    
            //     console.log("BTC average: " + btcLast) 
            
        }});
        
        $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", success: function(response){
            
            var btcLast = response.result.XXBTZUSD.b[0]    
            console.log("Kraken: " + btcLast) 
            $("#krakenLast").html(btcLast)
            
        }});
        
        
    }
    
    prices();


