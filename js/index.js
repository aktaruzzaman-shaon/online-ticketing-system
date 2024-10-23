// get value from destination input ---------------
const travelPoint = document.querySelector('#travelPlace')
travelPoint.addEventListener('submit', function (event) { getTravelPointValue(event) })



function getTravelPointValue(event) {
    event.preventDefault()
    const travelStartPoint = event.target.fromStation.value;
    const travelEndPoint = event.target.toStation.value;
    (function () {
        let seatDeatailsInfo = getSeatData()

        seatDeatailsInfo
            .then(seatDeatails => seatDeatails)
            .then(actualData => dataReceiveFunction(actualData))
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
const value = getSeatData().then(res => res.JSON()).then(data => data)
console.log(value)
