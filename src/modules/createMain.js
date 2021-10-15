

const mainSection = (() => {
    const content = document.getElementById("content")

    // Menu: title, searchBar and F/C switch
    const makeMenu = () => {

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
            titleContainer.textContent = "Weatherify"
            return titleContainer
        }

        const menuDiv = document.createElement("div")
        menuDiv.classList.add("mainMenu")

        menuDiv.appendChild( makeTitle() )
        menuDiv.appendChild( searchBar() )

        return content.appendChild(menuDiv)
    }

    // Background(or card container rather)
    // Card
    // Buttons to move left and right
    return {
       makeMenu
    }
})()

export default mainSection