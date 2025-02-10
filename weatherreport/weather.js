function showweatherDetails(event) {
    event.preventDefault();
    const long = document.getElementById('long').value;
    const latt = document.getElementById('latt').value;

    const apiKey = 'a56adc89c8e0f5c00f78a958f768538a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp /10} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        }).catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );