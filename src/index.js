import "./styles/style.css"

import mainSection from "./modules/createMain";
import Card from "./modules/makeCard";
import getData from "./modules/getData";

let cityArr = []

const loadDisplay = () => {
    mainSection.makeMenu()
    mainSection.makeCardArea()
}

loadDisplay()

// localStorage.clear()
// localStorage.setItem("cities", JSON.stringify(["Toronto", "New York", "Kingston", "Vienna"]))

const checkLocalStore = () => {
    if (!localStorage.getItem("cities")) {
        return cityArr.push("Toronto", "New York")
    } else {
        return cityArr = JSON.parse(localStorage.getItem("cities"))
    }
}

checkLocalStore()

const handleInput = () => {
    const searchForm = document.getElementById("city-form")
    const searchText = document.getElementById("search-city")

    const setLocal = (arr) => {
        localStorage.setItem("cities", JSON.stringify(arr))
    }

    const errorFlow = async() => { // Here we make the API call to see if it returns a valid response
        const response = await getData.makeCall(searchText.value)
        cityArr.push(response["name"])
        setLocal(cityArr)
        return response
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault()
        errorFlow().then((response) => Card.makeCard(response))
        searchForm.reset()
    })
}

handleInput()

// Init card display
const addCards = () => {
    for (let i = 0; i < cityArr.length; i++) {
        getData.makeCall(cityArr[i]).then(response => Card.makeCard(response))
    }
}
addCards()

