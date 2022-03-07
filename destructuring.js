// Predict Destructuring
// For the following five blocks of code, predict the output. 
// If a line of code will throw an error, state the error.

// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // output: 'Tesla'
console.log(otherRandomCar) // output: 'Mercedes'

// Output: Tesla, Mercedes

// Problem 2 

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}

// const { name: otherName } = employee;
// console.log(name); // output: Error!
// console.log(otherName); // output: Elon

// output: Error. name variable has not been declared. 

// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password); 
console.log(hashedPassword);

// Output: 12345 & undefined

// Problem 4 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const fifthNumber = numbers[4];

// console.log(first == second); // output: false
// console.log(first == third); // output: true
// console.log(fifthNumber);

// Output: false & true

// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key); // output: 'value';
console.log(secondKey); // output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // output: 1;
console.log(willThisWork); // output: 5;

// output: value, [1, 5, 1, 8, 3, 3], 1, 5;