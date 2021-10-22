import xIcon from "../assets/close_lavender_24dp.svg"

const Card = (() => {

    const parseData = (data) => {
        const checkRain = (data) => {
            if ("rain" in data) return data["rain"]["1h"]
            else return 0
        }

        return { // Process/Parse down to only used data values.
            cityID: data["id"],
            name: data["name"],
            description: data["weather"][0]["main"],
            icon: data["weather"][0]["icon"],
            temp: (data["main"]["temp"] - 273.15).toFixed(0),
            feels_like: (data["main"]["feels_like"] - 273.15).toFixed(0),

            humidity: data["main"]["humidity"],
            wind: (data["wind"]["speed"] * 3.6).toFixed(1),
            rain: checkRain(data)
        }
    }

    const makeCard = (Data) => {
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

            const addRemoveBtn = (data) => {
                const xBtn = document.createElement("img")
                xBtn.src = xIcon
                xBtn.className = "xButton"
                xBtn.id = `remove-${data}`
                xBtn.addEventListener("click", () => {
                    const container = document.getElementById("cardContainer")
                    container.removeChild( xBtn.closest("div") )
                    let storage = JSON.parse(localStorage.getItem("cities"))
                    storage.splice(storage.indexOf(`${data}`), 1)

                    if (storage.length > 0) localStorage.setItem("cities", JSON.stringify(storage))
                    else if (storage.length === 0) storage.push("toronto")
                })
                card.appendChild(xBtn)
            }

            const makeTitle = (text) => {
                const title = document.createElement("div")
                title.className = "cardTitle"
                title.textContent = text
                card.appendChild(title)
            }

            const addSvgIcon = (iconRef) => {
                const iconContainer = document.createElement("div")
                iconContainer.className = "iconContainer"

                const icon = document.createElement("img")
                icon.src = `https://openweathermap.org/img/wn/${iconRef}@2x.png`

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
                    temp.classList.add("tempVal")
                    temp.textContent = tempVal  + "°"
                    return temp
                }


                const addFeels = () => {
                    const feels = document.createElement("p")
                    feels.className = "feelsLike"
                    feels.textContent = `Feels like: `
                    return feels
                }

                const addFeelsValue = (feelVal) => {
                    const tempValue = document.createElement("p")
                    tempValue.className = "feelsLike tempVal"
                    tempValue.textContent = ` ${feelVal}°`
                    return tempValue
                }

                const addFeelsContainer = (data) => {
                    const feelContainer = document.createElement("div")
                    feelContainer.className = "feelsContainer"

                    feelContainer.appendChild( addFeels() )
                    feelContainer.appendChild( addFeelsValue(data.feels_like) )
                    return feelContainer
                }

                const makeContainer = () => {
                    const tempContainer = document.createElement("div")
                    tempContainer.className = "tempContainer"

                    tempContainer.appendChild( addDesc(data.description) )
                    tempContainer.appendChild( addTemp(data.temp) )

                    tempContainer.appendChild( addFeelsContainer(data) )
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
                    const checkRain = (data) => {
                       if (typeof data === undefined) {
                           return 0
                       } else {
                           return data
                       }
                    }
                    rain.textContent = checkRain(data.rain) + " mm"

                    const sectionDiv = makeSection()

                    sectionDiv.appendChild( addSectionTitle("Precipitation: ") )
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
                // Add title and icon
                addRemoveBtn(data.name)
                makeTitle(data.name)
                addSvgIcon(data.icon)

                // Add temp elements
                makeTemp(data.temp)

                // Add wind speed, humidity and precipitation
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