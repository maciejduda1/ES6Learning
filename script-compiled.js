'use strict';

// Zadanie 1

var string1 = 'Hello';
var string2 = 'World';
function helloWorld(string1, string2) {
	console.log(string1 + ' ' + string2);
}
helloWorld(string1, string2);

// Zadanie 2

// function multiply (a=1, b=1){return a*b}
var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};

console.log(multiply(5, 4));
console.log(multiply(5));

// Zadanie 3

var avarage = function avarage() {
	for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
		arg[_key] = arguments[_key];
	}

	return arg.reduce(function (a, b) {
		return a + b;
	}) / arg.length;
};
console.log(avarage(2));
console.log(avarage(5, 10, 20));

//Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(avarage.apply(undefined, grades));

//Zadanie5

var strangeTable = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = strangeTable[2],
    lastname = strangeTable[4];


console.log(firstname);
console.log(lastname);
