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

const checkLocalStore = () => {
    if (!localStorage.getItem("cities")) {
        return cityArr.push("Toronto")
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

    const alertError = (text) => {
        let msg
        if (text === "400") msg = "Please enter a city"
        if (text === "404") msg = "City not found"
        let errMsg = document.createElement("p")
        errMsg.className = "errMsg"
        errMsg.textContent = msg
        searchForm.appendChild(errMsg)

        searchText.classList.add("alertErr")

        setTimeout(() => {
            searchText.classList.toggle("alertErr")
            searchForm.removeChild(errMsg)
        }, 2000)
    }

    const errorFlow = async() => { // Check to see if fetch returns valid response
        try {
            const response = await getData.makeCall(searchText.value)
            cityArr.push(response["name"])
            setLocal(cityArr)
            Card.makeCard(response)
        } catch (error) {
            alertError(error.message) // Warn User of er (404 or 400)
        }
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault()
        errorFlow()
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

const changeTemp = () => {
    let isCTemp = true
    const cBtn = document.getElementById("celsius")
    const fBtn = document.getElementById("fahrenheit")

    const cToF = () => {
        let tempVal = document.querySelectorAll(".tempVal")
        if (isCTemp) {
            tempVal.forEach((item) => {
                isCTemp = false
                let cTemp = parseInt(item.textContent)
                return item.textContent = (cTemp * 9 / 5 + 32).toFixed(1) + "°"
            })
        }
    }
    const fToC = () => {
        let tempVal = document.querySelectorAll(".tempVal")
        if (!isCTemp) {
            tempVal.forEach((item) => {
                isCTemp = true
                let fTemp  = parseInt(item.textContent)
                return item.textContent = ((fTemp - 32) * 5 / 9).toFixed(0) + "°"
            })
        }
    }

    fBtn.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        cToF()
    })

    cBtn.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        fToC()
    })

}
changeTemp()


