async function getCityWeather() {
    try {
        const city = document.querySelector('input').value
        const apiKey = 'b69617f26cc0a63f2dc4a1d0d935f6fe';
        const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const weatherData = await weatherApi.json()

        console.log(weatherData)
    } catch(err){
        console.error('Something went wrong', err)
    }
}

document.querySelector('button').addEventListener('click', () => {
    getCityWeather()
})

