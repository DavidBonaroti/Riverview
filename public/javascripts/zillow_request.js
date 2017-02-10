console.log('listings', listings);
const API_KEY = "X1-ZWz19eqbfoa0i3_2jayc";
const ROOT_URL = "https://crossorigin.me/http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=" + API_KEY;
var url = ROOT_URL + "&address=" + zillowAddress + "&citystatezip=" + city + "%2C+PA"; // change template strings (es6)


$(function () {
  console.log($('zillow-btn'))
  $('button.zillow-btn').on('click', function(){
    $('.btn btn-success zillow-btn').attr('data-zillow');
    $.ajax({
      type: 'GET',
      url: $(this).getDataAttribute('listing-url'),
      success: function(listingData) {
        console.log('listingData', data);
        $('.listing-information').append('<div class="zillowInfo"></div>');
      }
    });
  });
});
