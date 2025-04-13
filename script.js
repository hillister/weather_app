async function getCityWeather() {
    try {
        const city = document.querySelector('input').value
        console.log(city)
    } catch(err){
        console.error('Something went wrong', err)
    }
}

document.querySelector('button').addEventListener('click', () => {
    getCityWeather()
})