import env from "../../config"; // Mock env var for OpenWeather API

const apiCall = (()=> {
    const makeCall = async(city) => {
        const api = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${env.apiKey}`
        const response = await fetch(`http://${api}`, {mode: "cors"})
        const weather = await response.json()
        return weather
    }
    return {
        makeCall
    }
})()

export default apiCall