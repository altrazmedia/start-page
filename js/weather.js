(function () {
  const element = document.getElementById("temp");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(onLocationRetrieved);
  }

  function onLocationRetrieved(location) {
    const { latitude, longitude } = location.coords;
    getWeather(latitude, longitude, displayTemperature);
  }

  function getWeather(lat, lon, cb) {
    const key = "82a6681567e9644f377a9057d6932ed1";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}&units=metric`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const { temp } = res.main;
        cb(temp);
      })
      .catch(console.log);
  }

  function displayTemperature(temperature) {
    const rounded = Math.round(temperature);
    element.innerHTML = `${rounded}°`;
  }
})();
