// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//Functions-
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

  //substring
  const content = "Alphabets";
  language.substring(1, 6)

  //Array Sort-
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

// Error handling
try{
    let a= 10;
    let b= 20;
    let sum = a+b;
    console.log('I am in try block');
    console.log('Sum is = ' +sum);
}
catch{
    console.log('I am inside catch block')
}
