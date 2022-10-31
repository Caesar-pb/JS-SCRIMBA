// document.getElementById("count").innerText = 5

// -------------------------------------------------------------------------------------

// let count = 5

// count = count + 2

// console.log(count)

// -------------------------------------------------------------------------------------

// let count = 0

// function increment() {
//     console.log("the button was clicked");
// }

// -------------------------------------------------------------------------------------

// function numberCall() {
//     console.log(42)
// }

// numberCall()

// -------------------------------------------------------------------------------------

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// -------------------------------------------------------------------------------------

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime() { 
//     console.log(lap1 + lap2 + lap3)
// }

// logLapTime()

// -------------------------------------------------------------------------------------

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// -------------------------------------------------------------------------------------


// let countElement = document.getElementById("count-element") // pass in arguments

// let count = 0

// function increment() {
//     count = count + 1
//     countElement.innerText = count
// }

// function save() {
//     console.log(count)
// }

// -------------------------------------------------------------------------------------

// let username = "Caesar"
// let message = "You have tree new notifications"
// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// -------------------------------------------------------------------------------------

// let name = "Caesar Pichardo"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

// -------------------------------------------------------------------------------------

// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)

// let points = 4 
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints

// console.log(totalPoints)

// -------------------------------------------------------------------------------------

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100

// -------------------------------------------------------------------------------------

// let welcomeElement = document.getElementById("welcome-element")

// let greeting = "Welcome Back "

// let name = "Caesar Pichardo"

// welcomeElement.innerText = "Welcome back " + "Caesar"

// // welcomeElement.innerText = welcomeElement.innerText + " " + "👋"

// // you can achive the same thing with += after the variable

// welcomeElement.innerText += "👋"

// -------------------------------------------------------------------------------------

// let saveElement = document.getElementById("save-element")
// let countElement = document.getElementById("count-element")

// let count = 0

// function increment() {
//     count += + 1
//     countElement.innerText = count
// }

// function save() {
//     let savedCount = " " + count + " - "
//     saveElement.innerText += savedCount
// }

// -------------------------------------------------------------------------------------

// let saveElement = document.getElementById("save-element")
// let countElement = document.getElementById("count-element")

// let count = 0

// function increment() {
//     count += + 1
//     countElement.textContent = count
// }

// function save() {
//     let savedCount = count + " - "
//     saveElement.textContent += savedCount
// }

// -------------------------------------------------------------------------------------

// let saveElement = document.getElementById("save-element")
// let countElement = document.getElementById("count-element")

// let count = 0

// function increment() {
//     count += + 1
//     countElement.textContent = count
// }

// function reduction() {
//     count += - 1
//     countElement.textContent = count
// }

// function save() {
//     let savedCount = count + " - "
//     saveElement.textContent += savedCount
//     countElement.textContent = 0
//     count = 0
// }

// function reset() {
//     let reset = " "
//     saveElement.textContent = reset
//     countElement.textContent = 0
//     count = 0
// }

// MEJORA 1 // --------------------------------------------------------------------------------------

// Count stop at 0

let saveElement = document.getElementById("save-element")
let countElement = document.getElementById("count-element")

let count = 0

function increment() {
    count += + 1
    countElement.textContent = count
}

function reduction() {
    count += - 1
    if (count === 0) {
        count = 0
    } else {
        count = 0
    }
    countElement.textContent = count
}

function save() {
    let savedCount = count + " - "
    saveElement.textContent += savedCount
    countElement.textContent = 0
    count = 0
}

function reset() {
    let reset = " "
    saveElement.textContent = reset
    countElement.textContent = 0
    count = 0
}










