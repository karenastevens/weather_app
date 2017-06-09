

//Assign temperature

$(document).ready(function(){
      var temp = 68;
      var symbol;
      function setTemp(){
        symbol = '&deg;'+'C';
        return temp + symbol;
      }
      $('#temp').html(setTemp());
});


// Get Geolocation

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var location;
    });
}

