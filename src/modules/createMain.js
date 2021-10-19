import sun from "../assets/sun-svgrepo-com.svg"

const mainSection = (() => {
    const content = document.getElementById("content")

    const favIcon = document.querySelector(".favicon")
        favIcon.href = sun

    const makeMenu = () => { // Menu: title, searchBar and F/C switch

        const makeFCBtn = () => {
            const tempSetContainer = document.createElement("div")
            tempSetContainer.className = "tempSetContainer"

            const fBtn = document.createElement("div")
            fBtn.className = "tempBtn"
            fBtn.id = "fahrenheit"
            fBtn.textContent = "F°"

            const cBtn = document.createElement("div")
            cBtn.className = "tempBtn"
            cBtn.id = "celsius"
            cBtn.textContent = "C°"

            tempSetContainer.appendChild(fBtn)
            tempSetContainer.appendChild(cBtn)
            return tempSetContainer
        }

        const searchBar = () => {
            const searchContainer = document.createElement("div")
            searchContainer.className = "searchContainer"

            const searchForm = document.createElement("form")
            searchForm.id = "city-form"
            searchForm.autocomplete = "off"

            const searchInput = document.createElement("input")
            searchInput.type = "search"
            searchInput.className = "searchInput"
            searchInput.id = "search-city"

            const searchBtn = document.createElement("button")
            searchBtn.className = "searchBtn"
            searchBtn.textContent = "Find City"
            searchBtn.id = "search-city-btn"
            searchBtn.type = "submit"

            searchContainer.appendChild( makeFCBtn() )

            searchForm.appendChild(searchInput)
            searchForm.appendChild(searchBtn)
            searchContainer.appendChild(searchForm)

            return searchContainer
        }

        const makeTitle = () => {
            const titleContainer = document.createElement("div")
            titleContainer.classList.add("menuTitle")
            titleContainer.textContent = "Weather-ify"
            return titleContainer
        }

        const menuDiv = document.createElement("div")
        menuDiv.classList.add("mainMenu")

        menuDiv.appendChild( makeTitle() )
        menuDiv.appendChild( searchBar() )

        return content.appendChild(menuDiv)
    }

    const makeCardArea = () => {
        const makeCardContainer = () => {
            const cardContainer = document.createElement("div")
            cardContainer.id = "cardContainer"
            return content.appendChild(cardContainer)
        }
        makeCardContainer()
    }

    return {
        makeMenu,
        makeCardArea
    }
})()

export default mainSection