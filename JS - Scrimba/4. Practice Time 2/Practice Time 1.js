
// --------- PRACTICE 1 - Objects and Functions --------- \\

// // Create a person object that contains three keys: name, age, and county.
// // Use yourself as an example to set the values for name, age, and country

// // Create a function, logData(), that uses the person object to create a
// // string in the following format: 
// // "Per is 35 years old and lives in Norway"

// // Call the logData() function to verify that it works

// let person = {
//     name: "Caesar",
//     age: 28,
//     country: "Dominican Republic"
// }

// function logData() {
//     console.log(person.name + " " + "is " + person.age + " " + "years old " + "and lives in " + person.country)
// }

// logData()

// --------- PRACTICE 2 - if else --------- \\

// // less than 6 years old -> free
// // 6 to 17 years old     -> child discount
// // 18 to 26 years old    -> student discount
// // 27 to 66 years old    -> full price
// // over 66 years old     -> senior citizen discount

// // Create a conditional statement (if/else/else if) that logs out the discount
// // the passenger will get based upon the value of the age variable

// // // my answer

// // let age = 77

// // if (age < 6) {
// //     console.log("Free")
// // } else if (age >= 6 && age <= 17) {
// //     console.log("Child discount")
// // } else if (age >= 18 && age <= 26) {
// //     console.log("student discount")
// // } else if (age >= 27 && age <= 66) {
// //     console.log("full price")
// // } else {
// //     console.log("senior citizen discount")
// // }

// /* HIS ANSWER 

// i don't need to specify all the intervals using de "&&".
// The conditions above a condition acts first */

// let age = 25

// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")    
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// --------- PRACTICE 3 - loops and arrays --------- \\

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// /* Use a for loop to log the following to the console:

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan
// */

// console.log("The 5 largest countries in the world: ")

// for (i = 0; i < largeCountries.length; i += 1) {
//     console.log("- " + largeCountries[i])
// }

// --------- PRACTICE 4 - push, pop, unshift, shift --------- \\

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// // You need to help me fixup the largeCountries array so that 
// // China and Pakistan are added back into their respective places

// // Use push() & pop() and their counterparts unshift() & shift()
// // Google how to use unshift() and shift()


// largeCountries.shift() // shift removes the firts element of an array
// largeCountries.unshift("China") // adds new elements to the beginning of an array
// largeCountries.pop() // pop removes the last element of an array
// largeCountries.push("Pakistan") // push adds an element at the end of an array

// console.log(largeCountries)

// --------- PRACTICE 5 - logical operators --------- \\

// let dayOfMonth = 13
// let weekday = "Friday"

// // If it is Friday the 13th, log out this spooky face: 😱
// // Use the logical "AND operator" -> &&

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// }

// --------- PRACTICE 6 - rock, papers, scissors --------- \\

// let hands = ["rock", "paper", "scissor"]

// // Create a function that returns a random item from the array

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(getHand())

// --------- PRACTICE 7 - EmojiFighter --------- \\\

    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", " 🕷 ","🐆", "🦕", "🦁"]

let stageElement = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    return stageElement.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})

// --------- PRACTICE 8 - Sorting Fruits --------- \\\

// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random.
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍎"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruits() {
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruits[i] === "🍊") {    
            orangeShelf.textContent += "🍊"
        }
    }
} 

/* It would have work with just an "else" at the end, but in case we need to add another fruit, 
like bananas or something, it will be easier to modify later. */

// --------- SOLO PRACTICE --------- \\\

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
"]",",","|",":",";","<",">",".","?","/"];

let passwordElementOne = document.getElementById("password-one")
let passwordElementTwo = document.getElementById("password-two")

function generatePasswords() {
    let passwordOne = ""
    let passwordTwo = ""
    for (i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomIndex]

        randomIndex = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomIndex]
    }
    passwordElementOne.textContent = passwordOne
    passwordElementTwo.textContent = passwordTwo
}

/* HOW LISSETTE DID IT

Establecemos dos variables vacias que iran contener el "string" de la contraseña.

Escribimos un "for loop" que dicta que: el loop empezara en 0, como es usual,
luego que solo haya un máximo de 15 caracteres, en un intervalo de uno en uno (como es usual).

establecemos el generador de numeros random, floor y random. luego decimos que la variable "passwordOne"
sea igual a ella misma más el caracter random de esta manera, cada vez que haga el loop la funcion agregara 
un nuevo caracter al string de las variables de arriba ademas de los que ya han sido agregados. Y como 
establecimos que el maximo de caracteres sea 15, entonces el string final sera de 15 con todos los 
caracteres random.

La segunda contraseña sera repetir lo mismo dentro del mismo "for loop". */

