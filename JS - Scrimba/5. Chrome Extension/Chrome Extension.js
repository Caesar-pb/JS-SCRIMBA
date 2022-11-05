// function saveLead() {
//     console.log("Button clicked from onclick attribute!")
// }

// /* Instead of using the "onclick" attribute in the html document to write an "event listener",
// we can use the following technique wich is most used by professionals. While using this technique we can
// remove "onclick" from html */

// let SaveInputButton = document.getElementById("save-input-button")

// SaveInputButton.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener!")
// })

// /* We declare a variable with the ID of the html element. Then we add the "addEventListener()".
// inside of this function or "method" we first specify what kind of event we want to "listen" for.
// and here is the "click" event. We write a comma and then we specify what are we going to do when someone clicks
// un the button; here we invoke a function */

// ---------------------------------------------------------------------------------------------------------------

// let box = document.getElementById("box")

// box.addEventListener("click", function (){
//     console.log("I want to open the box!")
// })

// ---------------------------------------------------------------------------------------------------------------

// // Refactor the code so that it uses .addEventListener()
// // when you click the SAVE INPUT button

// // function saveLead() {
// //     console.log("Button clicked!")
// // }

// let saveInputButton = document.getElementById("save-input-button")

// saveInputButton.addEventListener("click", function(){
//     console.log("Button clicked!")
// })

// ---------------------------------------------------------------------------------------------------------------

// // Create the "myLeads" array and "inputElement"

// // Create two variables:
// // myLeads -> should be assigned to an empty array
// // inputEl -> should be assigned to the text input field

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")

// /* the main diference between "let" and "const" (short for "constant") is that const variables cannot be reasign.
// If you later try to asign a new value to this variable, javascript wont let you */

// saveInputButton.addEventListener("click", function() {
//     console.log("Button clicked!")
// })

// ---------------------------------------------------------------------------------------------------------------

// /* 
// WHEN TO USE LET AND CONST:

// we try to use const when you plan or consider that the value one or more variables are not going to change 
// through out the code. It also let others programers know that the value of those variables cant be change.
// */

// // If possible, use const. If not, use let.

// // Which variables below should be changed from let to const?

// // The customer wants to order some stuff. Here are the details:

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex

// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price

// const fullPrice = basePrice - discount + shippingCost

// // Finally, notifying the customer

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// ---------------------------------------------------------------------------------------------------------------

// // Push to the myLeads array

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")

// // Push the value "www.awesomelead.com" to myArray when the input button is clicked

// saveInputButton.addEventListener("click", function() {
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// })

// ---------------------------------------------------------------------------------------------------------------

// // Push the value from the input field

// /* Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value.
// Google -> "get value from input field javascript" */

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     console.log(myLeads)
// })

// ---------------------------------------------------------------------------------------------------------------

// // Use a for loop to log out leads

// // Log out the items in the myLeads array using a for loop

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"] // this are just dummy leads.
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     console.log(myLeads)
// })

// for (i = 0; i < myLeads.length; i++) {
//     console.log(myLeads[i])
// }

// ---------------------------------------------------------------------------------------------------------------
 
// // Create an unordered list element (<ul>) with id="ul-el"
// // Grab the unordered list and store it in a const variable called ulEl
// // Render the leads in the unordered list using ulEl.textContent

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     console.log(myLeads)
// })

// for (i = 0; i < myLeads.length; i++) {
//     listElement.textContent += myLeads[i] + " "
// }

// ---------------------------------------------------------------------------------------------------------------

// // How to render <li> elements with innerHTML

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     console.log(myLeads)
// })

// /* we can not just simply write: "<li>" + myLeads[i] + "</li>", cuz it just gonna render it
// like a string: <li>www.awesomelead.com<li>. Instead we have to replace the "textContent" property with
// "innerHTML", then it can be render as a list*/

// for (i = 0; i < myLeads.length; i++) {
//     listElement.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

// ---------------------------------------------------------------------------------------------------------------

// // Use .innerHTML to render a Buy! button inside the div container

// let containerElement = document.getElementById("container")

// containerElement.innerHTML = "<button>Buy!</button>"

// ---------------------------------------------------------------------------------------------------------------

// // more innerHTML practice

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// let containerElement = document.getElementById("container")

// containerElement.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     containerElement.innerHTML += "<p class='paragraph'>Thank you for buying!</p"
// }

// ---------------------------------------------------------------------------------------------------------------

// // Use createElement() and append() instead of innerHTML

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     console.log(myLeads)
// })

// // Let's try a different method!

// for (i = 0; i < myLeads.length; i++) {

//     // listElement.innerHTML += "<li>" + myLeads[i] + "</li>"

//     // create element
//     // set text content
//     // append to ul\

//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     listElement.append(li)
// }

// ---------------------------------------------------------------------------------------------------------------

// // Improving the performance of our app

// // 1. Create a variable, listItems, to hold all the HTML for the list items
// // Assign it to an empty string to begin with
// // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
// // 3. Render the listItems inside the unordered list using ulEl.innerHTML

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     console.log(myLeads)
// })

// let listItems = ""

// for (i = 0; i < myLeads.length; i++) {
//     listItems += "<li>" + myLeads[i] + "</li>"
// }

// listElement.innerHTML = listItems

// /* Why is it better to put the innerHTML outside the for loop? Well always think about this sentence: 
// "DOM manipulation comes with a cost". It is better to run the inneHTML just one time instead of three times
// inside the loop*/

// ---------------------------------------------------------------------------------------------------------------

// // Improving the performance of our app


// // 1. Wrap the code below in a renderLeads() function
// // 2. Call the renderLeads() function

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// // Clear input field when clicked

// // the solution i chose

// /*

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)
//     if (inputElement.value != "") {
//         inputElement.value = ""
//     }
//     renderLeads()
// })

// */

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = "" // his solution
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// // add the <a> tag

// // Wrap the lead in an anchor tag (<a>) inside the <li>
// // Can you make the link open in a new tab?

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// // Template strings

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += 
//         `<li>
//             <a target="_blank" href="${myLeads[i]}">
//             ${myLeads[i]}
//             </a>
//         </li>`
//     }
//     listElement.innerHTML = listItems
// }

// /* template strings ( ` ` ) makes the whole expression a string the we can brake en several lines, so now we
// can make that html code in our javascript looks just how we would do it a html file. 
// A more readable and clean code. */

// /* Then, with the sintax ${} we can separate our javascript expression from the rest of string. */

// ---------------------------------------------------------------------------------------------------------------

// // Write your first template string

// // template strings/literals

// const recipient = "James"

// // Refactor the email string to use template strings

// // const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const email = `Hey ${recipient}! How is it going? Cheers Per.`

// console.log(email)

// ---------------------------------------------------------------------------------------------------------------

// // Make the template string even more dynamic

// // template strings/literals

// const recipient = "James"
// // Create a new variable, sender, and set its value to your name
// const sender = "Caesar Pichardo"

// // Refactor the email string to use template strings
// const email = `Hey ${recipient}! How is it going? Cheers ${sender} .`

// console.log(email)

// ---------------------------------------------------------------------------------------------------------------

// // Template strings on multiple lines

// // template strings/literals

// const recipient = "James"
// const sender = "Caesar Pichardo"

// // Break the email string into multiple lines
// const email = `
//     Hey ${recipient}! 

//     How is it going? 

//     Cheers ${sender}.`

// console.log(email)

// ---------------------------------------------------------------------------------------------------------------

// // Your first localStorage

// // 1. Save a key-value pair in localStorage
// // 2. Refresh the page. Get the value and log it to the console
// // 3. Clear localStorage

// // HINTS:
// // localStorage.setItem(key, value)
// // localStorage.getItem(key)
// // localStorage.clear()
// // PS: both key and value need to be strings

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement =document.getElementById("list-element")

// // localStorage.setItem("myName", "Caesar Pichardo")
// // let name = localStorage.getItem("myName")
// // console.log(name)

// // localStorage.clear()

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${myLeads[i]}">
//                 ${myLeads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// // Storing arrays in localStorage

// /* 

// localStorage only supports strings. Use: 

// JSON.stringify() - 

// A common use of JSON is to exchange data to/from a web server. When sending data to 
// a web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify().

// JSON.parse() - 

// A common use of JSON is to exchange data to/from a web server. When receiving data from 
// a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a 
// JavaScript object.

// */ 

// // 1. Turn the myLeads string into an array
// // 2. Push a new value to the array
// // 3. Turn the array into a string again
// // 4. Console.log the string using typeof to verify that it's a string

// let myLeads1 = ["www.awesomelead.com", "www.newlead.com"]
// let myLeads2 = `["www.awesomelead.com, www.newlead.com"]`

// myLeads1 = JSON.stringify(myLeads1)
// myLeads2 = JSON.parse(myLeads2)

// console.log(myLeads1)
// console.log(typeof myLeads1)

// myLeads2.push("www.epiclead.com")
// console.log(myLeads2)
// console.log(typeof myLeads2)


// -----------------------------------------------------------------------------------------------------------

// // Save and get the leads from localStorage

// // Get the leads from the localStorage
// // Store it in a variable, leadsFromLocalStorage
// // Log out the variable

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement = document.getElementById("list-element")
// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// console.log(leadsFromLocalStorage)

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()
//     console.log(localStorage.getItem("myLeads"))
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${myLeads[i]}">
//                 ${myLeads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// // Truthy and falsy values

// /* 

// |||| TRUTHY VALUES ||||

// In JavaScript, a truthy value is a value that is considered true when encountered in a 
// Boolean context. All values are truthy unless they are defined as falsy. That is, all values are 
// truthy except false, 0, -0, 0n, "", null, undefined, and NaN. 

// Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and 
// thus execute the if block):

// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// If the first object is truthy, the logical AND operator returns the second operand:

// true && "dog"
// // returns "dog"

// [] && "dog"
// // returns "dog"


// |||| FALSY VALUES ||||

// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a 
// Boolean context.

// JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as 
// conditionals and loops.

// The following table provides all JavaScript falsy values:

// - false
// - 0
// - ""
// - null
// - undefined
// - NaN

// ||| You just have remember this last list, then you'll always remember that if is not one of this, 
// then is a truthy value. |||

// diference between null and undefined:

// null ----------> how you as a developer signalize emptiness
// undefined  ----> how JavaScript signalizes emptiness

// */

// //// Falsy and Truthy ////////////////////////////////

// const credits = 0

// if (credits) {
//     console.log("Let's play 🎰")
// } else {
//     console.log("sorry, you have no credits 😭")
// }

// /// Null //////////////////////////////////////

// let currentViewers = null

// currentViewers = ["jane", "nick"]

// currentViewers = null

// if (true) {
//     // do something , e.g. notify the live streamers
//     console.log("we have viewers")
// }

// /// Undefined ///////////////////////////////////

// let currentViewerss 

// console.log(currentViewerss)

// let currentViewersss = ["jane"]

// console.log(currentViewersss[5])

// /// Guess the expression - truthy of falsy? ///////////

// // If you wanna check if an expression is truthy or falsy just wrap it on a boolean:

// // let trueOrFalse = Boolean("hello")
// // console.log(trueOrFalse) // this would be "true"

// console.log(  Boolean("")   ) // false
// console.log(  Boolean("0")  ) // false x - it is actually "true", cuz is a string
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false

// ---------------------------------------------------------------------------------------------------------------

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const listElement = document.getElementById("list-element")

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// // 1. Check if leadsFromLocalStorage is truthy
// // 2. If so, set myLeads to its value and call renderLeads()

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     renderLeads()
// }

// // with this, we can refresh the page abd the leads dont desapear

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()
//     console.log(localStorage.getItem("myLeads"))
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${myLeads[i]}">
//                 ${myLeads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// // clear the app

// let myLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const deleteButton = document.getElementById("delete-button")
// const listElement = document.getElementById("list-element")

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     renderLeads()
// }

// deleteButton.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     renderLeads() // we can just call the renderLeads function cuz after we deleted the items in the array
// })                // this function is now just emty as well

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (i = 0; i < myLeads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${myLeads[i]}">
//                 ${myLeads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// ---------------------------------------------------------------------------------------------------------------

// How function parameters can improve our code

// let myLeads = []
// let oldLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const deleteButton = document.getElementById("delete-button")
// const listElement = document.getElementById("list-element")

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// function render(leads) {
//     let listItems = ""
//     for (i = 0; i < leads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${leads[i]}">
//                 ${leads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// deleteButton.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads) 
// })           

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// ---------------------------------------------------------------------------------------------------------------

// // Write your first "function parameter"

// const welcomeElement = document.getElementById("welcome-element")

// function greetUser(name) {
//     welcomeElement.textContent = "Welcome back, " + name + "!"
// }

// greetUser("Caesar")

// // Write your first "function parameter"

// ---------------------------------------------------------------------------------------------------------------

// const welcomeElement = document.getElementById("welcome-element")

// // Give the function a parameter, greeting, that replaces "Welcome back"

// function greetUser(greeting) {
//     welcomeElement.textContent = greeting + "Caesar Pichardo"
// }

// greetUser("Klk! ")

// ---------------------------------------------------------------------------------------------------------------

// // functions with multiple parameters

// const welcomeElement = document.getElementById("welcome-element")

// // Give the function a parameter, greeting, that replaces "Welcome back"

// function greetUser(greeting, name, emoji) {
//     welcomeElement.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Klk", "Caesar Pichardo", "👋")


// ---------------------------------------------------------------------------------------------------------------

// numbers as function parameters

// // Create a function, add(), that adds two numbers together and returns the sum

// function add(number1, number2) {
//     return number1 + number2
// }

// console.log( add(3,4)    ) // should log 7
// console.log( add(9, 102) ) // should log 111

// ---------------------------------------------------------------------------------------------------------------

// // arguments vs parameters

// /*

// Arguments are created on the outside of the function, and parameters
// have to be on the inside of the function

// */

// //.                    parameters
// function greetUser(greeting, name, emoji) {
//     console.log(`${greeting}, ${name} ${emoji}`)
// }
// //.                arguments
// greetUser("Klk", "Caesar Pichardo", "👋")

// function add(number1, number2) {
//     return number1 + number2
// }

// console.log( add(3,4) )

// // say if this elements are parameters or arguments

// // What are greeting and name? ----- parameters
// // What are "Howdy" and "James"? --- arguments
// // What are num1 and num2? --------- parameters
// // What are 3 and 4? --------------- arguments

// ---------------------------------------------------------------------------------------------------------------

// // arrays as parameters

// // // Create a function, getFirst(arr), that returns the first item in the array
// // Call it with an array as an argument to verify that it works

// function getFirst(arr) {
//     return arr[0]
// }

// let firstCard = getFirst(["apple", "orange", "banana", "strawberry"])

// console.log(firstCard)

// ---------------------------------------------------------------------------------------------------------------

// // create de tab button

// let myLeads = []
// let oldLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const deleteButton = document.getElementById("delete-button")
// const listElement = document.getElementById("list-element")
// const tabButton = document.getElementById("save-tab-button")

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// tabButton.addEventListener("click", function() {
//     console.log(tabs[0].url) // with ".url" we can eliminate the "url:" off the logged link.
// })                           // if we don't do this we will get en in the console: 
//                              // >{url: 'https://www.linkedin.com/in/per-harald-borgen/'}
//                              // instead of just the link
 
// function render(leads) {
//     let listItems = ""
//     for (i = 0; i < leads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${leads[i]}">
//                 ${leads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// deleteButton.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads) 
// })           

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// ---------------------------------------------------------------------------------------------------------------

// // save the tab url

// let myLeads = []
// let oldLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const deleteButton = document.getElementById("delete-button")
// const listElement = document.getElementById("list-element")
// const tabButton = document.getElementById("save-tab-button")

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// tabButton.addEventListener("click", function() {
//     myLeads.push(tabs[0].url)  
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })                           
 
// function render(leads) {
//     let listItems = ""
//     for (i = 0; i < leads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${leads[i]}">
//                 ${leads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// deleteButton.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads) 
// })           

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// ---------------------------------------------------------------------------------------------------------------

// // get the current tab, use the chrome API to get the tap
//     // Grab the URL of the current tab!

// let myLeads = []
// let oldLeads = []
// const inputElement = document.getElementById("imput-element")
// const saveInputButton = document.getElementById("save-input-button")
// const deleteButton = document.getElementById("delete-button")
// const listElement = document.getElementById("list-element")
// const tabButton = document.getElementById("save-tab-button")

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// /* since only one tab should be active and in the current window at once,
// the return variable should only have one entry */

// tabButton.addEventListener("click", function(tabs) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(){
//         myLeads.push(tabs[0].url)  
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     })
    
// })                           
 
// function render(leads) {
//     let listItems = ""
//     for (i = 0; i < leads.length; i++) {
//         listItems += 
//             `<li>
//                 <a target="_blank" href="${leads[i]}">
//                 ${leads[i]}
//                 </a>
//             </li>`
//     }
//     listElement.innerHTML = listItems
// }

// deleteButton.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads) 
// })           

// saveInputButton.addEventListener("click", function() {
//     myLeads.push(inputElement.value)  
//     inputElement.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

// ---------------------------------------------------------------------------------------------------------------

// DEPLOY THE FINAL VERSION!

    let myLeads = []
    let oldLeads = []
    const inputElement = document.getElementById("imput-element")
    const saveInputButton = document.getElementById("save-input-button")
    const listElement = document.getElementById("list-element")
    const deleteButton = document.getElementById("delete-button")
    const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
    const tabButton = document.getElementById("save-tab-button")
    
    if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }
    
    tabButton.addEventListener("click", function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)  
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        })
    })                           
     
    function render(leads) {
        let listItems = ""
        for (i = 0; i < leads.length; i++) {
            listItems += 
                `<li>
                    <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                    </a>
                </li>`
        }
        listElement.innerHTML = listItems
    }
    
    deleteButton.addEventListener("dblclick", function() {
        localStorage.clear()
        myLeads = []
        render(myLeads) 
    })           
    
    saveInputButton.addEventListener("click", function() {
        myLeads.push(inputElement.value)  
        inputElement.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

// ---------------------------------------------------------------------------------------------------------------

// RECAP

/* 

const variable 
addEveventListener()
innerHTML
input.value
function parameters
template strings ``
localStorage
The JSON object (JSON.parse) (JSON.stringify) (manifest.json file)
objects inside of arrays

*/
