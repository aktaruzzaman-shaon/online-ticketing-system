// get value from destination input ---------------
const travelPoint = document.querySelector('#travelPlace')
travelPoint.addEventListener('submit', function (event) { getTravelPointValue(event) })

function getTravelPointValue(event) {
    event.preventDefault()
    const travelStartPoint = event.target.fromStation.value;
    const travelEndPoint = event.target.toStation.value;
    (async function () {
        let seatDeatailsInfo = await getSeatData()
        console.log(seatDeatailsInfo.tickets[0].seatAmount)
        seat(seatDeatailsInfo.tickets[0].seatAmount)
    })()
}

// fetching data-----------------------------------
async function getSeatData() {
    try {
        let response = await fetch('http://127.0.0.1:5500/asset/seatList.json')
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error.message)
    }
}

//showing seats 
function seat(seatQuantity) {
     
}
