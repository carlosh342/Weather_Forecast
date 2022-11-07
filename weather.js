
var cityInput = document.querySelector('#city_input');


var Submit_Handler = function (event) {
  event.preventDefault();

  var city_name = cityInput.value.trim();

  if (city_name) {
    getCityInfo(city_name);

    //repoContainerEl.textContent = '';
    //nameInputEl.value = '';
  } else {
    alert('Please enter a city name');
  }
};
// Get city info function 
var getCityInfo = function (city) {
  var key =`949d34db405088ab915c85319d50ea34`;
  var websiteURL = `https://api.openweathermap.org/geo/1.0/direct?q=`+city+`&appid=`+key;
  
  fetch(websiteURL)
    .then(function (response) {
    if (response.ok) {
        return response.jason()
     .then(function(response){

        var city_Lon = response.coord.lon;
        var city_Lat = response.coord.lat;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city_Lat}&lon=${city_Lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${key}`)
         .then(function(response){
            return response.jason();})
         })
        }
    })
         
 .catch(function (error) {
   alert('Unable to search for city');
    })
}