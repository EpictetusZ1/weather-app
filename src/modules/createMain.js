import arrowForward from "../assets/arrow_forward_ios_black_24dp.svg"
import arrowBack from "../assets/arrow_back_ios_black_24dp.svg"

const mainSection = (() => {
    const content = document.getElementById("content")

    const makeMenu = () => { // Menu: title, searchBar and F/C switch

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

            searchForm.appendChild(searchInput)
            searchForm.appendChild(searchBtn)
            searchContainer.appendChild(searchForm)

            return searchContainer
        }

        const makeFCBtn = () => {
            // TODO: Add code to toggle F or C display
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

        const addClickScroll = (leftBtn, rightBtn) => {
            rightBtn.addEventListener("mousedown", () => {
                    document.getElementById('cardContainer').scrollLeft += 40
            })

            leftBtn.addEventListener("mousedown", () => {
                document.getElementById('cardContainer').scrollLeft -= 40
            })
        }

        const makeBtnEls = () => {
            const btnContainer = document.createElement("div")
            btnContainer.className = "btnContainer"

            const leftBtn = document.createElement("div")
            leftBtn.className = "navBtn"

            const rightBtn = document.createElement("div")
            rightBtn.className = "navBtn"

            const arrowF = document.createElement("img")
            arrowF.src = arrowForward
            arrowF.className = "navArrow"

            const arrowB = document.createElement("img")
            arrowB.src = arrowBack
            arrowB.className = "navArrow"

            rightBtn.appendChild(arrowF)
            leftBtn.appendChild(arrowB)

            addClickScroll(leftBtn, rightBtn)

            btnContainer.appendChild(leftBtn)
            btnContainer.appendChild(rightBtn)
            return content.appendChild(btnContainer)
        }

        makeCardContainer()
        makeBtnEls()

    }

    // I want the card to be appended to the cardArea, but probably in a different function
    // One that can dynamically make cards from localStorage and the API
    return {
        makeMenu,
        makeCardArea
    }
})()

export default mainSection