rawCopper = 0
rawCopperGained = 1
rawCopperRequiredClicks = 5
rawCopperRemainingClicks = 5
rawCopperGainedUpgradeCost = 2
timesRawCopperGainUpgraded = 0

function RawCopperClicked(){
    rawCopperRemainingClicks--
    if (rawCopperRemainingClicks == 0){
        rawCopper += rawCopperGained
        rawCopperRemainingClicks = rawCopperRequiredClicks
        document.getElementById("rawCopperOwned").innerText = rawCopper
    }
    document.getElementById("rawCopperRemainingClicks").innerText = rawCopperRemainingClicks
}

function UpgradeRawCopperGained(){
    if (rawCopper >= rawCopperGainedUpgradeCost){
        rawCopper -= rawCopperGainedUpgradeCost
        rawCopperGained += 1
        rawCopperGainedUpgradeCost += 2
        timesRawCopperGainUpgraded += 1
        document.getElementById("rawCopperOwned").innerText = rawCopper
        document.getElementById("rawCopperGained").innerText = rawCopperGained
        document.getElementById("rawCopperGainUpgradeCost").innerText = rawCopperGainedUpgradeCost
        document.getElementById("timesRawCopperGainUpgraded").innerText = timesRawCopperGainUpgraded
    }
}