import env from "../../config"; // Mock env var for OpenWeather API

const apiCall = (()=> {
    const makeCall = async() => {
        const city = "Toronto" // Convert to let and add input from form
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