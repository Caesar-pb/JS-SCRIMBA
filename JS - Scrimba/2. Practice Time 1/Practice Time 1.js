
// PRACTICEC TIME 1.1 // -----------------------------------------------------------------------

// // log your full name

// let firstName = "Caesar"
// let lastName = "Pichardo Beltré"
// let fullName = firstName + " " + lastName

// console.log(fullName)

// PRACTICEC TIME 1.2 // -----------------------------------------------------------------------

// // log this greeting

// let name = "Linda"
// let greeting = "Hi there"

// function greetingMessage() {
//     greetingText = greeting + "," + " " + name + "!"
//     console.log(greetingText)
// }

// greetingMessage()

// PRACTICEC TIME 1.3 // -----------------------------------------------------------------------

// // create 2 functions, one to add 3 points, one remove 1 point.
// // Log this functions as need so the final number is exactly 10.

// let = myPoints = 3

// function add3points() {
//     myPoints += + 3
// }

// function remove1Point() {
//     myPoints += - 1
// }

// add3points()
// remove1Point()
// remove1Point()
// add3points()
// add3points()

// console.log(myPoints)

// PRACTICEC TIME 1.4 // -----------------------------------------------------------------------

// // Try to predict what each of the lines will log out

// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My Points: 14
// console.log(2 + 2) //  4
// console.log("11" + "14") // 1114

// PRACTICEC TIME 1.4 // -----------------------------------------------------------------------

// When the user clicks the purchase button, render out
// a message in the paragraph that has the id="error".

let errorElement = document.getElementById("error-element")
let errorText = "Something went wrong, please try again"

function purchase() {
    errorElement.textContent = errorText
}

// PRACTICEC TIME 1.5 // -----------------------------------------------------------------------

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

/* E.g. if the user clicks on the "Plus" button, you should render
"Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el" */

let num1 = 8
let num2 = 2

document.getElementById("num1-element").textContent = num1
document.getElementById("num2-element").textContent = num2

let sumElement = document.getElementById("sum-element")

function add() {
    let result = num1 + num2
    sumElement.textContent = result
}

function subtract() {
    let result = num1 - num2
    sumElement.textContent = result
}

function divide() {
    let result = num1 / num2
    sumElement.textContent = result
}

function multiply() {
    let result = num1 * num2
    sumElement.textContent = result
}

function reset() {
    let reset = " "
    sumElement.textContent = reset
}

// SOLO PRACTICE // -----------------------------------------------------------------------

// Recreate by your self this Basketball Score Board

let homeScore = document.getElementById("home-score-number")
let guestScore = document.getElementById("guest-score-number")

let homeCount = 0
let guestCount = 0

function homePlusOneScore() {
    homeCount += + 1
    homeScore.textContent = homeCount
}

function homePlusTwoScore() {
    homeCount += + 2
    homeScore.textContent = homeCount
}

function homePlusThreeScore() {
    homeCount += + 3
    homeScore.textContent = homeCount
}

function guestPlusOneScore() {
    guestCount += + 1
    guestScore.textContent = guestCount
}

function guestPlusTwoScore() {
    guestCount += + 2
    guestScore.textContent = guestCount
}

function guestPlusThreeScore() {
    guestCount += + 3
    guestScore.textContent = guestCount
}

function resetBoard() {
    score = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}
