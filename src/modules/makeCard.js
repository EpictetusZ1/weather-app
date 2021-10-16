import Data from "./test.json"
import cloudIcon from "../assets/black_cloud_24dp.svg"

const Card = (() => {
    // makeCard() will iterate through an Array

    const parseData = (data) => {
        const cleanData = { // Process/Parse down to only used data values.
            cityID: data["id"],
            name: data["name"],
            description: data["weather"][0]["description"],
            temp: data["main"]["temp"],
            feels_like: data["main"]["feels_like"],

            humidity: data["main"]["humidity"],
            wind: data["wind"]["speed"] * 3.6,
            rain: data["rain"]["1h"],
        }
        console.log(cleanData)
        return cleanData
    }

    const makeCard = () => {
        let cleanData = parseData(Data)

        const createCard = (data) => {
            const cardCont = document.getElementById("cardContainer")
            const card = document.createElement("div")
            card.className = "card"
            card.id = `${data.cityID}`
            cardCont.appendChild(card)
        }

        createCard(cleanData)

        const populateCard = (data) => {
            const card = document.getElementById(`${data.cityID}`)

            const makeTitle = (text) => {
                const title = document.createElement("div")
                title.className = "cardTitle"
                title.textContent = text
                card.appendChild(title)
            }

            const addSvgIcon = () => {
                const iconContainer = document.createElement("div")
                iconContainer.className = "iconContainer"

                const icon = document.createElement("img")
                icon.src = cloudIcon
                icon.className = "cloudIcon"

                iconContainer.appendChild(icon)
                card.appendChild(iconContainer)
            }

            const makeTemp = () => {
                const addDesc = (descVal) => {
                    const desc = document.createElement("p")
                    desc.className = "tempDesc"
                    desc.textContent = descVal
                    return desc
                }

                const addTemp = (tempVal) => {
                    const temp = document.createElement("p")
                    temp.className = "temp"
                    temp.textContent = tempVal + "°"
                    return temp
                }

                const addFeels = (feelVal) => {
                    const feels = document.createElement("p")
                    feels.className = "feelsLike"
                    feels.textContent = `Feels like: ${feelVal}°`
                    return feels
                }

                const makeContainer = () => {
                    const tempContainer = document.createElement("div")
                    tempContainer.className = "tempContainer"

                    tempContainer.appendChild( addDesc(data.description) )
                    tempContainer.appendChild( addTemp(data.temp) )
                    tempContainer.appendChild( addFeels(data.feels_like) )
                    card.appendChild(tempContainer)
                }
                makeContainer()
            }

            const addAuxData = () => {
                const makeSection = () => {
                    const section = document.createElement("div")
                    section.className = "cardSection"
                    return section
                }

                const addSectionTitle = (str) => {
                    const title = document.createElement("p")
                    title.className = "sectionTitle"
                    title.textContent = str
                    return title
                }

                const addHumidity = () => {
                    const humidity = document.createElement("p")
                    humidity.className = "sectionInfo"
                    humidity.textContent  = data.humidity + "%"
                    const sectionDiv = makeSection()

                    sectionDiv.appendChild( addSectionTitle("Humidity: ") )
                    sectionDiv.appendChild(humidity)
                    card.appendChild(sectionDiv)
                }

                const addRainChance = () => {
                    const rain = document.createElement("p")
                    rain.className = "sectionInfo"
                    rain.textContent = data.rain * 100 + "%"

                    const sectionDiv = makeSection()

                    sectionDiv.appendChild( addSectionTitle("Chance of Rain: ") )
                    sectionDiv.appendChild(rain)
                    card.appendChild(sectionDiv)
                }

                const addWindSpeed = () => {
                    const wind = document.createElement("p")
                    wind.className = "sectionInfo"
                    wind.textContent = data.wind + " km/h"

                    const sectionDiv = makeSection()
                    sectionDiv.appendChild( addSectionTitle("Wind Speed: ") )
                    sectionDiv.appendChild(wind)
                    card.appendChild(sectionDiv)
                }

                addHumidity()
                addRainChance()
                addWindSpeed()
            }

            const generateCardData = () => {
                makeTitle(data.name)
                addSvgIcon()

                makeTemp(data.temp)

                addAuxData()
            }

            generateCardData()

        }
        populateCard(cleanData)


    }

    return {
        makeCard
    }
})()

export default Card