$(document).ready(function () {
  $('#button').on('click', function(){
    var address = $(this).attr('data-zillow');
    var city = $(this).attr('data-city');
    console.log(address);
    console.log(city);
    const API_KEY = "X1-ZWz19eqbfoa0i3_2jayc";
    const ROOT_URL = "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=" + API_KEY;
    var url = ROOT_URL + "&address=" + address + "&citystatezip=" + city + "%2C+PA";
    console.log(url);
    $.ajax({
      type: 'GET',
      url: url,
      success: function(zillowInfo) {
        console.log('zillowInfo', zillowInfo);
        //$('.listing-information').append('<div class="zillowInfo"></div>');
      }
    });
  });
});
