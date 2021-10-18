import env from "../../config"; // Mock env var for OpenWeather API

const apiCall = (()=> {

    const myError = (code) => {
        throw new Error(`${code}`)
    }

    const makeCall = async(city) => {
        const api = `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${env.apiKey}`
        const response = await fetch(`http://${api}`, {mode: "cors"})
        if (response.ok) {
            const weather = await response.json()
            return weather
        } else {
            return myError(response.status)
        }
    }
    return {
        makeCall
    }
})()

export default apiCall