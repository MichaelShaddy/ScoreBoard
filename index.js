// -----------SETTING VARIABLES---------------- 

let homeCountEl = document.getElementById("home-count-el")
let awayCountEl = document.getElementById("away-count-el")
let homeCount = 0
let awayCount = 0

// -----------HOME COUNT BUTTONS---------------- 
function homePlusOne() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function homePlusTwo() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function homePlusThree() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}

// -----------AWAY COUNT BUTTONS---------------- 

function awayPlusOne() {
    awayCount += 1
    awayCountEl.textContent = awayCount
}

function awayPlusTwo() {
    awayCount += 2
    awayCountEl.textContent = awayCount
}

function awayPlusThree() {
    awayCount += 3
    awayCountEl.textContent = awayCount
}

// -----------RESET BUTTON HOME---------------- 

function homeReset() {
    homeCountEl.textContent = 0
    homeCount = 0
}

// -----------RESET BUTTON AWAY---------------- 

function awayReset() {
    awayCountEl.textContent = 0
    awayCount = 0
}