import Data from "./test.json"

const Card = (() => {
    // makeCard() will iterate through an Array

    const parseData = (data) => {
        const cleanData = { // Process/ Parse down to only used data values.
            cityID: data["id"],
            name: data["name"],
            description: data["weather"][0]["description"],
            temp: data["main"]["temp"],
            feels_like: data["main"]["feels_like"],
            humidity: data["main"]["humidity"],
            pressure: data["main"]["pressure"],
            rain: data["rain"]["1h"],
            sunrise: data["sys"]["sunrise"],
            sunset: data["sys"]["sunset"]
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
            card.id = `${data.id}`
            cardCont.appendChild(card)
        }

        createCard(cleanData)

        const populateCard = (data) => {
            const card = document.getElementById(`${data.id}`)

            const makeTitle = (text) => {
                const title = document.createElement("div")
                title.className = "cardTitle"
                title.textContent = text
                card.appendChild(title)
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

                const makeContainer = () => {
                    const tempContainer = document.createElement("div")
                    tempContainer.className = "tempContainer"

                    tempContainer.appendChild( addDesc(data.description) )
                    tempContainer.appendChild( addTemp(data.temp) )
                    card.appendChild(tempContainer)
                }
                makeContainer()
            }

            makeTitle(data.name)
            makeTemp(data.temp)

        }
        populateCard(cleanData)


    }

    return {
        makeCard
    }
})()

export default Card