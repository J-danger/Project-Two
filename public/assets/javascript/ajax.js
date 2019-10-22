

$(document).ready(function() {
    
    
    
$.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
    
    // var btcAverageLast = response.last    
    // console.log("BTC average: " + btcAverageLast) 
    // $("#averageLast").html(btcAverageLast)

    var newCoin = {
        coin_pair: response.display_symbol,
        price: parseInt(response.last),
        time: response.timestamp        
    };    
    console.log("average: ",newCoin)                
    
    // $.post("/", newCoin, function (results){
    //     console.log(results)
    // })   
}})
            
$.ajax({url: "https://api.gemini.com/v1/pubticker/btcusd", success: function(response){
        
    var newCoin = {
            coin_pair: "BTC-USD",
            price: parseInt(response.last),
            time: response.volume.timestamp        
        };  
        console.log("gemini: ",newCoin)
        $.post("/", newCoin, function (results){
            console.log(results)
        })  
    }});
    $.ajax({url: "http://cors-anywhere.herokuapp.com/https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT", success: function(response){
        
        var d = new Date();
        var n = d.getTime();
        var newCoin = {
            coin_pair: "BTC-USD",
            price: parseInt(response.price),
            time: n,          
                 
        };  
        console.log("binance: ",newCoin)
        $.post("/", newCoin, function (results){
            console.log(results)
        })  
    }});

    $.ajax({url: "https://api.coinbase.com/v2/prices/spot?currency=USD", success: function(response){
        
        var d = new Date();
        var n = d.getTime();
        var newCoin = {
            coin_pair: response.data.base + "-" + response.data.currency,
            price: parseInt(response.data.amount),
            time: n
            
        };  
        console.log("coinbase: ",newCoin)
        $.post("/", newCoin, function (results){
            console.log(results)
        })  
        
    }}); 
    
    $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XBTUSD", success: function(response){
        
        var d = new Date();
        var n = d.getTime();
        
        var newCoin = {
            coin_pair: "BTC-USD",
            price: parseInt(response.result.XXBTZUSD.b[0]),
            time: n,  
            
        };  
        console.log("Kraken: ",newCoin)
        $.post("/", newCoin, function (results){
            console.log(results)
        })  
        
    }});        
    
    
    function submitPrices(Post){
        $.post("/api/post/", Post, function (){
    
})
}

// submitPrices();
    
})





