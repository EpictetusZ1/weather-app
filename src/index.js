import "./styles/style.css"

import mainSection from "./modules/createMain";
import Card from "./modules/makeCard";
import getData from "./modules/getData";

// getData.makeCall().then(result => console.log(result))

const loadDisplay = () => {
    mainSection.makeMenu()
    mainSection.makeCardArea()
}

loadDisplay()

const addCard = () => {
    Card.makeCard()
}

addCard()