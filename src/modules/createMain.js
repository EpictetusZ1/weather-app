

const mainSection = (() => {
    const content = document.getElementById("content")

    const makeMenu = () => { // Menu: title, searchBar and F/C switch

        const searchBar = () => {
            const searchContainer = document.createElement("div")
            searchContainer.className = "searchContainer"

            const searchInput = document.createElement("input")
            searchInput.type = "search"
            searchInput.className = "searchInput"

            const searchBtn = document.createElement("button")
            searchBtn.className = "searchBtn"
            searchBtn.textContent = "Find City"

            searchContainer.appendChild(searchInput)
            searchContainer.appendChild(searchBtn)

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

        const makeBtnEls = () => {
            const btnContainer = document.createElement("div")
            btnContainer.className = "btnContainer"

            const leftBtn = document.createElement("div")
            leftBtn.className = "navBtn"
            leftBtn.classList.add("leftNav")

            const rightBtn = document.createElement("div")
            rightBtn.className = "navBtn"
            rightBtn.classList.add("rightNav")

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