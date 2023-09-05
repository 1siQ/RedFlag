score=0
time = setTimeout(timesup, 5000)
if (typeof red == "undefined") {
    redF()
}
function timesup() {
    gameOver(score,"Time is up ")
    score = 0
}
function redF() {
    colW = ["a","b","c"]
    colN = Math.ceil(Math.random() * 3)
    colWrand = Math.ceil(Math.random() * 3 -1)
    red = colW[colWrand] + colN
    document.getElementById(red).style.backgroundColor = "red"
}
function gameOver(score,mes) {
    alert(mes + score)
    document.getElementById(red).style.backgroundColor = ""
    redF()
    clearTimeout(time)
    time = setTimeout(timesup, 5000)

}
function kill(col) {
    if (col == red) {
        document.getElementById(red).style.backgroundColor = ""
        score += 1
        redF()
    }
    else{
        gameOver(score,"Wrong Place ")
        score = 0
    }
}

