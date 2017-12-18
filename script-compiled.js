"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
class Stopwatch {
constructor(display){
	this.running = false;
	this.display = display;
	this.reset();
	this.print(this.times);
}

reset() {
	this.times = {
		minutes: 0,
		seconds: 0,
		miliseconds: 0
	};
}

print() {
	this.display.innerText = this.format(this.times);
}

format(times) {
	return `${pad0(times.minutes)} : ${pad0(times.seconds)} : ${pad0(Math.floor(times.miliseconds))}`;
}
start() {
	if (!this.running){
		this.running = true;
		this.watch = setInterval(() => this.step(), 10);
	}
}

step() {
	if (!this.running) return;
	this.calculate();
	this.print();
}

calculate() {
	this.times.miliseconds += 1;
	if(this.times.miliseconds >= 100) {
		this.times.seconds += 1;
		this.times.miliseconds = 0;
	}
	if (this.times.seconds >= 60) {
		this.times.minutes += 1;
		this.times.seconds = 0;
	}
}

stop() {
	this.running = false;
	clearInterval(this.watch);
}

saveResult(){ 
	const newList = document.querySelector(".results");
	const newResult = document.createElement("li");
	newResult.innerHTML = this.display.innerText;
	newList.appendChild(newResult);
}

resetResultList(){
	const newList = document.querySelector(".results");
	while (newList.hasChildNodes()) {
		newList.removeChild(newList.firstChild);
	}
}
}

function pad0(value){
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

var restartButton = document.getElementById('restart');
restartButton.addEventListener('click', () => {stopwatch.reset(); stopwatch.print()});

var saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => stopwatch.saveResult());

var resetListButton = document.getElementById('reset-list');
resetListButton.addEventListener('click', () => stopwatch.resetResultList());
*/

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(display) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, display));

		_this.state = {
			running: false,
			display: display
		};
		_this.reset();
		_this.print(_this.times);
		return _this;
	}

	_createClass(Stopwatch, [{
		key: "reset",
		value: function reset() {
			this.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
		}
	}, {
		key: "print",
		value: function print() {
			this.display.innerText = this.format(this.times);
		}
	}, {
		key: "format",
		value: function format(times) {
			return pad0(times.minutes) + " : " + pad0(times.seconds) + " : " + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: "start",
		value: function start() {
			var _this2 = this;

			if (!this.running) {
				this.running = true;
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
		}
	}, {
		key: "step",
		value: function step() {
			if (!this.running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: "calculate",
		value: function calculate() {
			this.times.miliseconds += 1;
			if (this.times.miliseconds >= 100) {
				this.times.seconds += 1;
				this.times.miliseconds = 0;
			}
			if (this.times.seconds >= 60) {
				this.times.minutes += 1;
				this.times.seconds = 0;
			}
		}
	}, {
		key: "stop",
		value: function stop() {
			this.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: "saveResult",
		value: function saveResult() {
			var newList = document.querySelector(".results");
			var newResult = document.createElement("li");
			newResult.innerHTML = this.display.innerText;
			newList.appendChild(newResult);
		}
	}, {
		key: "resetResultList",
		value: function resetResultList() {
			var newList = document.querySelector(".results");
			while (newList.hasChildNodes()) {
				newList.removeChild(newList.firstChild);
			}
		}
	}]);

	return Stopwatch;
}(React.Component);

console.log(React.createElement(Stopwatch, {}));

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var stopwatch = React.createElement(Stopwatch, {});
ReactDOM.render(stopwatch, document.querySelector('.stopwatch'));

/*
const stopwatch = new Stopwatch(
	document.querySelector('.stopwatch'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

var restartButton = document.getElementById('restart');
restartButton.addEventListener('click', () => {stopwatch.reset(); stopwatch.print()});

var saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => stopwatch.saveResult());

var resetListButton = document.getElementById('reset-list');
resetListButton.addEventListener('click', () => stopwatch.resetResultList());


*/
