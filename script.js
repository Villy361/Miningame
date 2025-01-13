rawCopper = 0
rawCopperGained = 1
rawCopperRequiredClicks = 5
rawCopperRemainingClicks = 5
rawCopperGainedUpgradeCost = 2
timesRawCopperGainUpgraded = 0
rawTin = 0
rawTinGained = 1
rawTinRequiredClicks = 10
rawTinRemainingClicks = 10
rawTinGainedUpgradeCost = 5
timesRawTinGainUpgraded = 0

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

function RawTinClicked(){
    rawTinRemainingClicks--
    if (rawTinRemainingClicks == 0){
        rawTin += rawTinGained
        rawTinRemainingClicks = rawTinRequiredClicks
        document.getElementById("rawTinOwned").innerText = rawTin
    }
    document.getElementById("rawTinRemainingClicks").innerText = rawTinRemainingClicks
}

function UpgradeRawTinGained(){
    if (rawTin >= rawTinGainedUpgradeCost){
        rawTin -= rawTinGainedUpgradeCost
        rawTinGained += 1
        rawTinGainedUpgradeCost += 5
        timesRawTinGainUpgraded += 1
        document.getElementById("rawTinOwned").innerText = rawTin
        document.getElementById("rawTinGained").innerText = rawTinGained
        document.getElementById("rawTinGainUpgradeCost").innerText = rawTinGainedUpgradeCost
        document.getElementById("timesRawTinGainUpgraded").innerText = timesRawTinGainUpgraded
    }
}