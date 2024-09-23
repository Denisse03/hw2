export function getRandomWeather(location) {
  const apiKey = "bfa5a49c4e8e44058e004707242309";
  const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`;

  $.getJSON(baseURL, (data) => {
    console.log(data);
    getName(data);
    getInfo(data);
  }).fail((error) => {
    console.log("error", error.message);
  });
}

export function getName(data) {
  console.log(data);
  $("#weather").empty();

  $.each(data.forecast.forecastday, (idx, day) => {
    $("#weather").append(`
         <div class="date">
           <img src=${day.day.condition.icon}>
            <p>${day.date}</p>
           <p>Condition: ${day.day.condition.text}</p>
             <p>Temperature: ${day.day.avgtemp_f}</p> 
            <p>Sunrise: ${day.astro.sunrise}</p>
            <p>Sunset: ${day.astro.sunset}</p>
        <p>Humidity: ${day.day.avghumidity}</p>
        

         </div>
      
           `);
  });
}
