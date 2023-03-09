
var cityInput = document.querySelector('#city_input');
var button = document.querySelector('#button_input');

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
  var key =`43e7f31e65f6960e9ba1c8206157e24b`;
  var websiteURL = `https://api.openweathermap.org/geo/1.0/direct?q=`+city+`&appid=`+key;
  
  fetch(websiteURL)
    .then(function (response) {
      console.log(response)
    if (response.ok) {
        return response.json()
     .then(function(response){
        console.log(response)
        var city_Lon = response[0].lon;
        var city_Lat = response[0].lat;
        console.log(city_Lon)
        console.log(city_Lat) 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city_Lat}&lon=${city_Lon}&appid=${key}`)
      .then(function(response){
       console.log(response.list)
       return response.json()
      .then(function(response){
      console.log(response)
      displayForecast(response.list)
      })
}
       )
         })}
        
    })
    
 .catch(function (error) {
   alert('Unable to search for city');
    })
}   

const weatherCardContainer = document.createElement('div');
weatherCardContainer.classList.add('weatherContainer');
document.querySelector('body').appendChild(weatherCardContainer);

 var displayForecast=function(response){
  while(weatherCardContainer.firstChild){
    weatherCardContainer.firstChild.remove();
  }

   let i=0;
   var j=0;

   while (i<5){
    if(response[j].dt_txt.includes("12:00:00")){
      const temp = response[j].main.temp
      const humidity = response[j].main.humidity+" %"
      const windSpeed = response[j].wind.speed +" MPH"
      const icon  = response[j].weather[0].icon
      console.log(icon)
      const tempP = document.createElement('p')
      const humidityP = document.createElement('p')
      const windSpeedP = document.createElement('p')
      const iconImg = document.createElement('img')

      tempP.textContent = temp;
      humidityP.textContent = humidity;
      windSpeedP.textContent = windSpeed;
      iconImg.src = "http://openweathermap.org/img/w/"+icon+".png"
      console.log(icon)

      const weatherCard = document.createElement('div');
      weatherCard.classList.add('weatherCard')

      weatherCard.append(tempP, humidityP, windSpeedP,iconImg)
      weatherCardContainer.appendChild(weatherCard)
    i++;}
    j++
  }
 }

var displayElements = function (repos,search_term){
  if(repos.length ===0){
    repoContainerEl.textContent ="No repositories found"
    return;
  }
 
 repoSearchterm.textContent=search_term;

 for (var i=0;i<repoSearchterm.length;i++){
   
  }};
button.addEventListener("click",Submit_Handler);