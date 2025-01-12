rawCopper = 0
rawCopperGained = 1
rawCopperRequiredClicks = 5
rawCopperRemainingClicks = 5

function RawCopperClicked(){
    rawCopperRemainingClicks--
    if (rawCopperRemainingClicks == 0){
        rawCopper += rawCopperGained
        rawCopperRemainingClicks = rawCopperRequiredClicks
        document.getElementById("rawCopperOwned").innerText = rawCopper
    }
    document.getElementById("rawCopperRemainingClicks").innerText = rawCopperRemainingClicks
}