
// let firstCard = 10
// let secondCard = 12
// let sum = firstCard + secondCard

// if (sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack!")
// } else {
//     console.log("You're out of the game!")
// }

// -----------------------------------------------------------------------------------------------

// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// let age = 21

// if (age >= 21) {
//     console.log("Welcome, sir. Have a nice evening.")
// } else {
//     console.log("No bitches for you, motherf*cker!")
// }

// -----------------------------------------------------------------------------------------------

// // Check if the person is elegible for a birthday card from the King! (100)
// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"

// let age = 100

// if (age < 100) {
//     console.log("Not elegible.")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not elegible, you have already gotten one.")
// }

// -----------------------------------------------------------------------------------------------

// // Write the conditional according to these rules:

// // if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// // else -> "You're out of the game! 😭"

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard

// let hasBlackJack = false

// if (sum <= 20) {
//     console.log('Do you want to draw a new card? 🙂')
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
// }

// // CASH OUT

// console.log(hasBlackJack)

// -----------------------------------------------------------------------------------------------

// // 1. Create a variable called isAlive and assign it to true
// // 2. Flip its value to false in the appropriate code block
// // 3. Log it out to check that you're doing it right

// let firstCard = 12
// let secondCard = 11
// let sum = firstCard + secondCard

// let hasBlackJack = false
// let isAlive = true

// if (sum <= 20) {
//     console.log('Do you want to draw a new card? 🙂')
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }

// console.log(isAlive)

// -----------------------------------------------------------------------------------------------

// // comment if true or false

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // flase
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

// -----------------------------------------------------------------------------------------------

// // 1. Declare a variable called message and assign its value to an empty string
// // 2. Reassign the message variable to the string we're logging out
// // 3. Log it out!

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// if (sum <= 20) {
//     message = "Do you want to draw a new card? 🙂"
// } else if (sum === 21) {
//     hasBlackJack = true
//     message = "Wohoo! You've got Blackjack! 🥳"
// } else {
//     isAlive = false
//     message = "You're out of the game! 😭"
// }

// console.log(message)

// -----------------------------------------------------------------------------------------------

// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// messageElement = document.getElementById("message-element")
// sumElement = document.getElementById("sum-element")
// // sumElement = document.querySelector("#sum-element") // better than Get element by ID, is more especific.
// // sumElement = document.querySelector(".sum-element") // if the element is a class, just like in CSS

// function startGame() {
    
//     sumElement.textContent += " " + sum

//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }

//     messageElement.textContent = message
// }

// -----------------------------------------------------------------------------------------------

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = 6
//     sum += card
//     renderGame()
// }


// -----------------------------------------------------------------------------------------------

// // Arrays - ordered lists of items

// let featurePosts = [
//     "Chack out my Netflix clone", 
//     "Here's the code form my project", 
//     "I've just relaunched my portfolio"
// ]

//                 // 0 index          // 1 indexe      // 2 index      // 3 index

// let mySkills = ["Motion Graphics", "Layout Design", "UI/UX Design", "Web Dsign"]

// console.log( mySkills[2] )

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// // Make the following appear in the console:
// // Frontend developer at Xeneta
// // People counter for Norstat
// // CEO at Scrimba

// console.log( experience[1] )
// console.log( experience[2] )
// console.log( experience[0] )

// -----------------------------------------------------------------------------------------------

// // Arrays - ordered lists of items

// let featuredPosts = [
//     "Chack out my Netflix clone", 
//     "Here's the code form my project", 
//     "I've just relaunched my portfolio"
// ]

// console.log( featuredPosts.length ) //length is 3

// -----------------------------------------------------------------------------------------------

// // Array - ordered list of items - composite / complex data type

// // Create an array that describes yourself. Use the three primitive data types you've learned
// // It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let mySelf = ["Caesar Pichardo", 28, true]

// -----------------------------------------------------------------------------------------------

// let cards = [7, 4]

// cards.push(6) // method - is a fancy way to say: a function on an object

// console.log(cards) 

// -----------------------------------------------------------------------------------------------

// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage) // Push adds that element to the array

// console.log(messages)

// messages.pop() // Pop remove the last element in an array

// console.log(messages)

// -----------------------------------------------------------------------------------------------

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = 6
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// -----------------------------------------------------------------------------------------------

// // Count to ten!

// // We need to specify...

// // Where should we START counting?
// // Where is the FINISH line?
// // What's the STEP SIZE we should use?

// //       START          FINISH      STEP SIZE
// for ( let count = 10;  count < 21;  count += 1 )  {
    
//     console.log(count)

// }

// -----------------------------------------------------------------------------------------------

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// // Create a for loop that counts from 10 to 100 in steps of 10
// // Use console.log to log out the numbers

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

// -----------------------------------------------------------------------------------------------

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "Emoji"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// -----------------------------------------------------------------------------------------------

// let cards = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should run

// // for (i = 0; i < cards.length; i + 1) {
// //     console.log(cards[i])
// // }

// for (i = 0; i < cards.length; i ++) {  // the "i++" acts the same as the "i + 1"
//     console.log(cards[i])\
// }

// -----------------------------------------------------------------------------------------------

// let sentence = ["Hello ", "my ", "name ", "is ", "Caesar"] 
// let greetingElement = document.getElementById("greeting-element")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (i = 0; i < sentence.length; i++) {
//     greetingElement.textContent += sentence[i] // important: you have to use the "+=", no just "=", or it just
//                                                // gonna loop throught all the array and end up just rendering "Caesar"
// } 


// // but, how do you keep the spaces between the words if I remove them from the array?

// let sentence = ["Hello", "my", "name", "is", "Caesar"] 
// let greetingElement = document.getElementById("greeting-element")

// for (i = 0; i < sentence.length; i++) {
//     greetingElement.textContent += sentence[i] + " " // just add the space after de looped word.  
// }

// -----------------------------------------------------------------------------------------------

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++) {
//         cardsElement.textContent += cards[i] + " "
//     }
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = 6
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// -----------------------------------------------------------------------------------------------

// // RETURN //    

// /* The return statement ends function execution and specifies a value
// to be returned to the function caller. */

// /* When a return statement is used in a function body, the execution of
// the function is stopped. If specified, a given value is returned to the function caller.
// For example, the following function returns the square of its argument, x, where x is a number.*/

// /* function square(x) {
//     return x * x;
// }
// const demo = square(3);
// demo will equal 9 */

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// // Write a function that returns the total race time
// // Call/invoke the function and store the returned value in a new variable
// // Finally, log the variable out

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)


// -----------------------------------------------------------------------------------------------

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// function getRandomCard() {
//     return 5
// }

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++) {
//         cardsElement.textContent += cards[i] + " "
//     }
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// -----------------------------------------------------------------------------------------------

// // GENERATE A RANDOM NUMBER

// let randomNumber = Math.random() // 0.000 ---> 9.999

// console.log(randomNumber)

// /* 

// What does Math.random() do?

// Your answer: It generates a random number between 0 and 1 (including 0, but not one) (0.000... ----> 0.999...)

// */

// -----------------------------------------------------------------------------------------------

// // DICE FUNCTION

// let randomNumber = Math.random() * 6  // 0.000 ---> 5.999

// console.log(randomNumber)

// /* 

// In which range will our randomNumber be now?

// From: 0
// To: 5.9999999...

// */

// -----------------------------------------------------------------------------------------------

// // MATH.FLOOR

// // let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.88769142)

// console.log(flooredNumber)

// /* 

// What does Math.floor() do to positive numbers?

// Your answer: it round them down to a whole number. It removes de decimals.

// */

// -----------------------------------------------------------------------------------------------

// // DICE FUNCTION (part 2)

// let randomNumber = Math.floor ( Math.random() * 6 ) // 0 | 1 | 2 | 3 | 4 | 5

// console.log(randomNumber)

// /* 

// Write down all the possible values randomNumber can hold now!

// 4 - 0 - 0 - 2 - 4 - 2 - 3 - 1 - 5 - ..... 

// */

// -----------------------------------------------------------------------------------------------

// // DICE FUNCTION (part 3)
// // Try to modify the expression so that we get a range from 1 to 6

// let randomNumber = Math.floor ( Math.random() * 6 ) + 1

// console.log(randomNumber)

// // Create a function, rollDice(), that returns a random number between 1 and 6

// function rollDice() {
//     let randomNumber = Math.floor ( Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log(rollDice())

// -----------------------------------------------------------------------------------------------

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// function getRandomCard() {
//     let randomNumber = Math.floor( Math.random()* 13) + 1
//     if (randomNumber === 1) {
//         return 11
//     } else if (randomNumber > 10) {
//         return 10
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++) {
//         cardsElement.textContent += cards[i] + " "
//     }
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// -----------------------------------------------------------------------------------------------

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// // all of the above is the state of the game without interacting with it.

// function getRandomCard() {
//     let randomNumber = Math.floor( Math.random()* 13) + 1
//     if (randomNumber === 1) {
//         return 11
//     } else if (randomNumber > 10) {
//         return 10
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++) {
//         cardsElement.textContent += cards[i] + " "
//     }
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// -----------------------------------------------------------------------------------------------

// // THE LOGICAL "AND" OPERATOR

// let hasCompletedCourse = true
// let givesCertificate = true

// /* this reads as: if the person has completed the course AND (&&) has given the certificate, 
// then the function can generate the certificate. */

//        // if this is true        AND  This is also true, then...
// if (hasCompletedCourse === true && givesCertificate === true) { 
//         generateCertificate() // run this code
// }

// /* you can also achive the same (and is much better) by coding it like it shows below; both already have the
// value of "true". But for now, in order to be explicit about the condition we are checking,
// we're keeping it like we writed it above */

// // if (hasCompletedCourse && givesCertificate) { 
// //     generateCertificate()
// // }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// -----------------------------------------------------------------------------------------------

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }

// -----------------------------------------------------------------------------------------------

// // THE LOGICAL "OR" OPERATOR

// // Create two boolean variables, likesDocumentaries and likesStartups
// // Use an OR statement (||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// -----------------------------------------------------------------------------------------------

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// function getRandomCard() {
//     let randomNumber = Math.floor( Math.random()* 13) + 1
//     if (randomNumber === 1) {
//         return 11
//     } else if (randomNumber > 10) {
//         return 10
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++) {
//         cardsElement.textContent += cards[i] + " "
//     }
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()
//     } 
// }
    

// -----------------------------------------------------------------------------------------------

// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageElement = document.getElementById("message-element")
// let sumElement = document.getElementById("sum-element")
// let cardsElement = document.getElementById("cards-element")

// // OBJECTS - We have taken two variables and convert it into an "object" 
// // Objects store data in-depth - composite / complex data type

// let player = {    
//     name: "Caesar",
//     chips: 145
// }
// let playerElement = document.getElementById("player")
// playerElement.textContent = player.name + ": $" + player.chips // we use dots after the object to call value

// ///////////////////////////////////////////////////////////////////////////////

// function getRandomCard() {
//     let randomNumber = Math.floor( Math.random()* 13) + 1
//     if (randomNumber === 1) {
//         return 11
//     } else if (randomNumber > 10) {
//         return 10
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsElement.textContent = "Cards: "
//     for (i = 0; i < cards.length; i++) {
//         cardsElement.textContent += cards[i] + " "
//     }
//     sumElement.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         hasBlackJack = true
//         message = "You've got Blackjack!"
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//     }
//     messageElement.textContent = message
// }

// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()
//     } 
// }

// -----------------------------------------------------------------------------------------------

// // INTRO TO OBJECTS

// // Objects - store data in-depth - composite / complex data type

// // key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)

// // console.log(course["tags"]) 

// /* you can do a brackets notation to get the same result.
// But we are not gonna use it like that for now. The dot is simpler, shorter, and is 
// prefer for developers */

// -----------------------------------------------------------------------------------------------

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array.
// Log out at least two of the keys using the dot notation.

// let castle = {
//     location: "Castle in Tuscania (VT)",
//     title: "San Giusto Abbey { Mediaval Tower }",
//     roomFeatures: "4 guest 2 bedrooms 2 beds 2 baths",
//     isSuperhost: true,
//     stars: 5.0,
//     reviews: 271,
//     price: 173,
//     images: ["img/castle1.png", "img/castle2.png", "img/castle3.png"]
// }

// console.log(castle.title)
// console.log(castle.price)

// -----------------------------------------------------------------------------------------------

let player = {    
    name: "Caesar",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageElement = document.getElementById("message-element")
let sumElement = document.getElementById("sum-element")
let cardsElement = document.getElementById("cards-element")
let playerElement = document.getElementById("player")

playerElement.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()* 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}   

function renderGame() {
    cardsElement.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }
    sumElement.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "You've got Blackjack!"
    } else {
        isAlive = false
        message = "You're out of the game!"
    }
    messageElement.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } 
}