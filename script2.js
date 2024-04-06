var x2;
var y2;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  x2 = position.coords.latitude;
  y2 = position.coords.longitude;

  let url2 = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${x2},${y2}&days=3`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23f78b087dmsh98161b4f2e3b40ep15cb15jsnbeaa34e4500a',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  consume(url2, options); // Call consume function inside showPosition after getting coordinates
  var today = new Date();
var year = today.getFullYear();
var mes = today.getMonth()+1;
var dia = today.getDate();
var fecha =dia+"/"+mes+"/"+year;
  document.getElementById('date').innerHTML=`${fecha}`;
  async function consume(url, options) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if(result!==undefined){
        document.getElementById('main').innerHTML=`Weather Forecast for ${result.location.name},${result.location.country}`;
        document.getElementById('location').innerHTML=`${result.location.name}`;
        document.getElementById('temperature').innerHTML=`${result.current.feelslike_c} &deg;C`;
        document.getElementById('condition').innerHTML=`${result.current.condition.text}`;
        document.getElementById('high-low').innerHTML=`${result.forecast.forecastday[0].day.maxtemp_c} &deg;C / ${result.forecast.forecastday[0].day.mintemp_c} &deg;C`;
        document.getElementById('wind').innerHTML=`${result.current.wind_kph} Km/hr , ${result.current.wind_dir}`;
        document.getElementById('humidity').innerHTML=`${result.current.humidity}%`;
        document.getElementById('sunrise').innerHTML=`${result.forecast.forecastday[0].astro.sunrise}`;
        document.getElementById('sunset').innerHTML=`${result.forecast.forecastday[0].astro.sunset}`;
        document.getElementById('Visibility').innerHTML=`${result.current.vis_km} Km`;
        document.getElementById('image').innerHTML=`<img src="${result.forecast.forecastday[0].day.condition.icon}"></img>`
        document.getElementById('image2').innerHTML=`<img src="${result.forecast.forecastday[1].day.condition.icon}"></img>`
        document.getElementById('image3').innerHTML=`<img src="${result.forecast.forecastday[2].day.condition.icon}"></img>`
        document.getElementById('Max1').innerHTML=`Maximum Temp: ${result.forecast.forecastday[0].day.maxtemp_c}`
        document.getElementById('Max2').innerHTML=`Maximum Temp: ${result.forecast.forecastday[1].day.maxtemp_c}`
        document.getElementById('Max3').innerHTML=`Maximum Temp: ${result.forecast.forecastday[2].day.maxtemp_c}`
        document.getElementById('Min1').innerHTML=`Minimum Temp: ${result.forecast.forecastday[0].day.mintemp_c}`
        document.getElementById('Min2').innerHTML=`Minimum Temp: ${result.forecast.forecastday[1].day.mintemp_c}`
        document.getElementById('Min3').innerHTML=`Minimum Temp: ${result.forecast.forecastday[2].day.mintemp_c}`
        document.getElementById('Avg1').innerHTML=`Average Temp: ${result.forecast.forecastday[0].day.avgtemp_c}`
        document.getElementById('Avg2').innerHTML=`Average Temp: ${result.forecast.forecastday[1].day.avgtemp_c}`
        document.getElementById('Avg3').innerHTML=`Average Temp: ${result.forecast.forecastday[2].day.avgtemp_c}`
        document.getElementById('Humidity1').innerHTML=`Humidity: ${result.forecast.forecastday[0].day.avghumidity}%`
        document.getElementById('Humidity2').innerHTML=`Humidity: ${result.forecast.forecastday[1].day.avghumidity}%`
        document.getElementById('Humidity3').innerHTML=`Humidity: ${result.forecast.forecastday[2].day.avghumidity}%`
        document.getElementById('RainChance1').innerHTML=`Rain Probability: ${result.forecast.forecastday[0].day.daily_chance_of_rain}%`
        document.getElementById('RainChance2').innerHTML=`Rain Probability: ${result.forecast.forecastday[1].day.daily_chance_of_rain}%`
        document.getElementById('RainChance3').innerHTML=`Rain Probability: ${result.forecast.forecastday[2].day.daily_chance_of_rain}%`
      }
    } catch (error) {
      console.error(error);
    }
  }
}


getLocation();
