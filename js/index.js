// get value from destination input ---------------
const travelPoint = document.querySelector('#travelPlace')
travelPoint.addEventListener('submit', function (event) { getTravelPointValue(event) })

function getTravelPointValue(event) {
    event.preventDefault()
    const travelStartPoint = event.target.fromStation.value;
    const travelEndPoint = event.target.toStation.value;
    (async ()=> await getSeatData())()
}

// fetching data-----------------------------------
let data = null;
async function getSeatData() {
    try {
        let response = await fetch('http://127.0.0.1:5500/asset/seatList.json')
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        data = json
        return json
    } catch (error) {
        console.log(error)
    }
}

console.log(data)
