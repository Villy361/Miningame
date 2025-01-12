rawCopper = 0
rawCopperRequiredClicks = 5
rawCopperRemainingClicks = 5

function RawCopperClicked(){
    rawCopperRemainingClicks--
    if (rawCopperRemainingClicks == 0){
        rawCopper++
        rawCopperRemainingClicks = rawCopperRequiredClicks
        document.getElementById("rawCopperOwned").innerText = rawCopper
    }
    document.getElementById("rawCopperRemainingClicks").innerText = rawCopperRemainingClicks
}