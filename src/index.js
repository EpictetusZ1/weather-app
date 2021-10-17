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

const setLocalStorage = () => {
    const searchForm = document.getElementById("city-form")
    const searchText = document.getElementById("search-city")

    const errorFlow = async() => {
        const response = await getData.makeCall(searchText.value)
        const reply = addData(response)
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault()
        errorFlow().then(() => addCards())
        searchForm.reset()
    })

    const alertError = (text) => {
        let errMsg = document.createElement("p")
        errMsg.className = "errMsg"
        errMsg.textContent = text
        searchForm.appendChild(errMsg)

        searchText.classList.add("alertErr")

        setTimeout(() => {
            searchText.classList.toggle("alertErr")
            searchForm.removeChild(errMsg)
        }, 2000)
    }

    const addData = async (response) => {
        await response
        if (response["error"]) {
            if (response.error.code === 400) {
                alertError(response.error.msgUsr)
            }
            if (response.code === 404) {
                alertError(response.error.msgUsr)
            }
        }
        else {
            return cityArr.push(response["name"])
        }
    }
}

setLocalStorage()

const addCards = () => {
    for (let i = 0; i < cityArr.length; i++) {
        console.log(cityArr[i])
        getData.makeCall(cityArr[i]).then(response => Card.makeCard(response))
    }
}
addCards()