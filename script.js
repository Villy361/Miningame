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
money = 0
moneyGainMult = 1
moneyPerRawTin = 2
moneyPerRawCopper = 1

function RawCopperClicked(){
    rawCopperRemainingClicks--
    if (rawCopperRemainingClicks == 0){
        rawCopper += rawCopperGained
        rawCopperRemainingClicks = rawCopperRequiredClicks
        document.getElementById("rawCopperOwned").innerText = rawCopper
        document.getElementById("rawCopperSellAmount").innerText = rawCopper
        document.getElementById("moneyGainedFromRawCopper").innerText = rawCopper * moneyGainMult * moneyPerRawCopper
    }
    document.getElementById("rawCopperRemainingClicks").innerText = rawCopperRemainingClicks
}

function UpgradeRawCopperGained(){
    if (rawCopper >= rawCopperGainedUpgradeCost){
        rawCopper -= rawCopperGainedUpgradeCost
        rawCopperGained *= 2
        rawCopperGainedUpgradeCost *= 4
        timesRawCopperGainUpgraded++
        document.getElementById("rawCopperOwned").innerText = rawCopper
        document.getElementById("rawCopperGained").innerText = rawCopperGained
        document.getElementById("rawCopperGainUpgradeCost").innerText = rawCopperGainedUpgradeCost
        document.getElementById("timesRawCopperGainUpgraded").innerText = timesRawCopperGainUpgraded
        document.getElementById("rawCopperSellAmount").innerText = rawCopper
        document.getElementById("moneyGainedFromRawCopper").innerText = rawCopper * moneyGainMult * moneyPerRawCopper
    }
}

function RawTinClicked(){
    rawTinRemainingClicks--
    if (rawTinRemainingClicks == 0){
        rawTin += rawTinGained
        rawTinRemainingClicks = rawTinRequiredClicks
        document.getElementById("rawTinOwned").innerText = rawTin
        document.getElementById("rawTinSellAmount").innerText = rawTin
        document.getElementById("moneyGainedFromRawTin").innerText = rawTin * moneyGainMult * moneyPerRawTin
    }
    document.getElementById("rawTinRemainingClicks").innerText = rawTinRemainingClicks
}

function UpgradeRawTinGained(){
    if (rawTin >= rawTinGainedUpgradeCost){
        rawTin -= rawTinGainedUpgradeCost
        rawTinGained *= 2
        rawTinGainedUpgradeCost *= 4
        timesRawTinGainUpgraded += 1
        document.getElementById("rawTinOwned").innerText = rawTin
        document.getElementById("rawTinGained").innerText = rawTinGained
        document.getElementById("rawTinGainUpgradeCost").innerText = rawTinGainedUpgradeCost
        document.getElementById("timesRawTinGainUpgraded").innerText = timesRawTinGainUpgraded
        document.getElementById("rawTinSellAmount").innerText = rawTin
        document.getElementById("moneyGainedFromRawTin").innerText = rawTin * moneyGainMult * moneyPerRawTin
    }
}

function MoneyClickedTin(){
    if (rawTin > 0){
        money += rawTin * moneyGainMult * moneyPerRawTin
        rawTin = 0
        document.getElementById("rawTinOwned").innerText = rawTin
        document.getElementById("moneyOwned").innerText = money
        document.getElementById("rawTinSellAmount").innerText = 0
        document.getElementById("moneyGainedFromRawTin").innerText = 0
    }
}

function MoneyClickedCopper(){
    if (rawCopper > 0){
        money += rawCopper * moneyGainMult * moneyPerRawCopper
        rawCopper = 0
        document.getElementById("rawCopperOwned").innerText = rawCopper
        document.getElementById("moneyOwned").innerText = money
        document.getElementById("rawCopperSellAmount").innerText = 0
        document.getElementById("moneyGainedFromRawCopper").innerText = 0
    }
}