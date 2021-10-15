import "./styles/style.css"

import mainSection from "./modules/createMain";
import getData from "./modules/getData";

// getData.makeCall().then(result => console.log(result))

const loadDisplay = () => {
    mainSection.makeMenu()
}

loadDisplay()