"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch() {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

		_this.state = {
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		};
		_this.start = _this.start.bind(_this);
		_this.stop = _this.stop.bind(_this);
		_this.reset = _this.reset.bind(_this);
		_this.saveResult = _this.saveResult.bind(_this);
		return _this;
	}

	_createClass(Stopwatch, [{
		key: "print",
		value: function print() {
			//		console.log(this.format(this.state.times));	
			return this.innerText = this.format(this.state.times);
		}
	}, {
		key: "format",
		value: function format(times) {
			return pad0(times.minutes) + " : " + pad0(times.seconds) + " : " + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: "reset",
		value: function reset() {
			this.setState({
				times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				}
			});
		}
	}, {
		key: "start",
		value: function start() {
			var _this2 = this;

			if (!this.state.running) {
				this.setState({
					running: true
				});
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
		}
	}, {
		key: "step",
		value: function step() {
			//console.log(this.state);
			if (!this.state.running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: "calculate",
		value: function calculate() {
			//console.log(this.state.times);
			this.setState({ times: { minutes: this.state.times.minutes, seconds: this.state.times.seconds, miliseconds: this.state.times.miliseconds += 1 } });
			if (this.state.times.miliseconds >= 100) {
				this.setState({ times: { minutes: this.state.times.minutes, seconds: this.state.times.seconds += 1, miliseconds: this.state.times.miliseconds = 0 } });
			}
			//console.log(this.state.times);
			if (this.state.times.seconds >= 60) {
				this.setState({ times: { minutes: this.state.times.minutes += 1, seconds: this.state.times.seconds = 0, miliseconds: this.state.times.miliseconds } });
			}
		}
	}, {
		key: "stop",
		value: function stop() {
			this.setState({ running: false });
			clearInterval(this.watch);
		}
	}, {
		key: "saveResult",
		value: function saveResult() {
			var newResult = document.createElement("li");
			newResult.innerHTML = this.innerText;
			resultsList.appendChild(newResult);
		}
	}, {
		key: "resetResultList",
		value: function resetResultList() {
			resultsList.innerHTML = "";
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement('div', {}, React.createElement('button', { onClick: this.start }, 'Start'), React.createElement('button', { onClick: this.stop }, 'Stop'), React.createElement('button', { onClick: this.reset }, 'Reset'), React.createElement('div', {}, React.createElement('p', {}, this.print())), React.createElement('h1', {}, 'Lista Wyników'), React.createElement('ul', { id: "resultsList" }), React.createElement('button', { onClick: this.resetResultList }, 'Zresetuj listę'), React.createElement('button', { onClick: this.saveResult }, 'Zapisz wynik'));
		}
	}]);

	return Stopwatch;
}(React.Component);

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var stopWatch = React.createElement(Stopwatch, {});
ReactDOM.render(stopWatch, document.getElementById('stopwatch'));
