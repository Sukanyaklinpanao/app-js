function sevenPercent(price) {
    let vat = price * 7 / 100
    let value = parseInt(price) + vat
    return value.toFixed(2) + " baht"
}
function threePercent(price) {
    let vat = price * 3 / 100
    let value = parseInt(sevenPercent(price)) - vat
    return value.toFixed(2) + " baht"
}
function fivePercent(price) {
    let vat = price * 5 / 100
    let value = parseInt(sevenPercent(price)) - vat
    return value.toFixed(2) + " baht"
}
function sevenPercentProgram(value) {
    alert(sevenPercent(value))   //Program start run from here 
}
function threePercentProgram(value) {
    alert(threePercent(value))   //Program start run from here 
}
function fivePercentProgram(value) {
    alert(fivePercent(value))   //Program start run from here 
}