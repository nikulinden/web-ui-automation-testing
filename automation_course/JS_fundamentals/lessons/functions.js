// dclarative function - can be called before declaration
function helloOne(){
    console.log('Hello one')
}

helloOne()

// anonymous function - cannot
var helloTwo = function(){
    console.log('Hllo two')
}

// ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three')
}

// Function with arguments
function printName(name){
    console.log(name)
}
printName('john')

var number = 2

// Function with return 
function multiplyByTwo(number){
    return number * 2
}

console.log(`The result of multiplying ${number} by two is ${multiplyByTwo(2)}`)

// console.log(__printHelper.js)
//import function
import { printAge } from './helpers/printHelper.js'
printAge(5)

// import everything
import * as helper from './helpers/printHelper.js'
helper.printAge(10)