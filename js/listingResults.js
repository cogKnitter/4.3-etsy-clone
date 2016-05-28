var $ = require("jquery");

var $listings = $("[data-js='listings']");

this.appendResults =function(){

  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?", function(data){
  console.log(data);
    data.results.forEach(function(resp) {
      $listings.append(`
        <span class="grid__col--3 photo__wrapper" >
          <img class="photo__el" src="${resp.Images[0].url_170x135}"/>
          <h2 class="result__caption">${resp.title}</h2>
          <h2 class="shop-name">${resp.Shop.shop_name}</h2>
          <h2 class="price">${resp.price}</h2>
        </span>
        `)
    })
});

}
