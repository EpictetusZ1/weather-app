import "./styles/style.css"

import mainSection from "./modules/createMain";
import Card from "./modules/makeCard";
import getData from "./modules/getData";


let myCities = ["Toronto", "Newmarket"]

const loadDisplay = () => {
    mainSection.makeMenu()
    mainSection.makeCardArea()
}
loadDisplay()

const getLocalStorage = () => {
    localStorage.clear()
    localStorage.setItem("cities", JSON.stringify(myCities))
    let cityArr = JSON.parse(localStorage.getItem("cities"))
}

getLocalStorage()

const addCards = () => {
    for (let i = 0; i < myCities.length; i++) {
        console.log(myCities[i])
        // I want to make an API for each city, then make a card for that city.
        getData.makeCall(myCities[i]).then(result => Card.makeCard(result))

    }
}

addCards()