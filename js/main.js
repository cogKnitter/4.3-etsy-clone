var $ = require("jquery");

$(function(){

  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images&callback=?", function(data){
  console.log(data);
});

 etsyData.forEach(function(listing){
    listingResults.appendResults(listing);
   });

})
