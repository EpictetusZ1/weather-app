import env from "../../config"; // Mock env var for OpenWeather API

const apiCall = (()=> {

    const makeCall = async(city) => {
        try {
            const api = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${env.apiKey}`
            const response = await fetch(`http://${api}`, {mode: "cors"})
            const weather = await response.json()
            console.log(weather)
            if (weather.cod === "400") throw {
                msg: "HTTP: 400 Bad Request Error",
                msgUsr: "Please enter a city",
                code: 400
            }
            if (weather.cod === "404") throw {
                msg: "HTTP: 404 Not found",
                msgUsr: "City not found",
                code: 404
            }
            if (weather.cod === 200) return weather
        } catch (error) {
            console.log(error)
            return {error}
        }

    }
    return {
        makeCall
    }
})()

export default apiCall