// Zadanie 1

const string1 = 'Hello';
const string2 =  'World';
function helloWorld(string1, string2){
	console.log(`${string1} ${string2}`);
}
helloWorld(string1, string2);

// Zadanie 2

// function multiply (a=1, b=1){return a*b}
const multiply = (a=1, b=1) => a*b

console.log(multiply(5,4));
console.log(multiply(5));

// Zadanie 3

const avarage = (...arg) => arg.reduce((a,b) => a+b)/arg.length;  
console.log(avarage(2));
console.log(avarage(5,10,20));

//Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(avarage(...grades)); 

//Zadanie5

const strangeTable = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = strangeTable

console.log(firstname);
console.log(lastname);