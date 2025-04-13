async function getCityWeather(city) {
    const apiKey = 'b69617f26cc0a63f2dc4a1d0d935f6fe';
    try {
        const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const weatherData = await weatherApi.json()
        
        return weatherData;
    } catch(err){
        console.error('City not found')
    }
}

function displayWeather(weatherData){
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    document.querySelector('#temperature').innerHTML = `Temperature: ${temp}°C`
    document.querySelector('#description').innerHTML = `Weather: ${description}`
}

function displayError(errorMessage){
    document.querySelector('#error').innerHTML = errorMessage;
}



document.querySelector('button').addEventListener('click', async () => {
    const city = document.querySelector('input').value;
    
    try {
        const weatherData = await getCityWeather(city)
        displayWeather(weatherData)
    }catch(err){
        displayError(err);
    }

})




