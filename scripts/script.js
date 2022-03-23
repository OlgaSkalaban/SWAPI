//console.log("ghbdtn")

//const baseURL = "https://swapi.dev/api"

/*async function fetchSW() {
    //console.log('Fetch SW started...')
    try {
        const response = await fetch(baseURL)
        const data = await response.json()
        console.log('Data: ', data)
    } catch(e) {
        console.error(e)
    }    
}*/

async function showUserCard(id) {
    let response = await fetch('https://swapi.dev/api/people/')
    let users = await response.json()
    
    let userData = await fetch(`https://swapi.dev/api/people/${id}/`)
    let userCard = await userData.json()

    console.log(userCard.name)
}

showUserCard(1)