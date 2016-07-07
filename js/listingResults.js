var $ = require("jquery");

var $keywordEntry = $("[data-js='searchInput']");
var $keywordForm = $("[data-js='searchForm']");
var $listings = $("[data-js='listings']");
var $searchKey = ("");
var $searchTerm = ("");

this.appendResults =function(){
  $keywordEntry.on("keyup", function(e) {
    $searchKey = $(e.target)
  });

  $keywordForm.on("submit", function(e) {
    $searchTerm = $searchKey.val();
    e.preventDefault();


    $.getJSON("https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=" + $searchTerm + "&includes=Images,Shop&callback=?", function(data){
    console.log(data);
      data.results.forEach(function(resp) {
        $listings.append(`
          <span class="grid__col--3 photo__wrapper" >
            <img class="photo__el" src="${resp.Images[0].url_170x135}"/>
            <div class="caption__wrapper">
              <h2 class="result__caption">${resp.title}</h2>
            </div>
            <div class="name-price__wrapper">
              <h2 class="shop-name">${resp.Shop.shop_name}</h2>
              <h2 class="price">${resp.price}</h2>
            </div>
          </span>
          `)
      })
    });
    $keywordEntry.val("");
  });

}
