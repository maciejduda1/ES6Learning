
class Stopwatch extends React.Component {
	constructor() {
		super();
		this.state = {
			running: false,
			times : {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		};
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset= this.reset.bind(this);
		this.saveResult=this.saveResult.bind(this);
	}
	
	print() {
	//		console.log(this.format(this.state.times));	
		return	this.innerText = this.format(this.state.times);
	}

	format(times) {
		return `${pad0(times.minutes)} : ${pad0(times.seconds)} : ${pad0(Math.floor(times.miliseconds))}`;
	}

	reset() {
		this.setState({
			times : {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		})
	}

	start() {
		if (!this.state.running){
			this.setState({
				running : true
			});
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		//console.log(this.state);
		if (!this.state.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
		//console.log(this.state.times);
		this.setState({times: {minutes: this.state.times.minutes, seconds: this.state.times.seconds, miliseconds : this.state.times.miliseconds +=1} })
		if(this.state.times.miliseconds >= 100) {
			this.setState({times: {minutes: this.state.times.minutes, seconds: this.state.times.seconds += 1, miliseconds: this.state.times.miliseconds = 0} })
		}
		//console.log(this.state.times);
		if (this.state.times.seconds >= 60) {
			this.setState({times: { minutes: this.state.times.minutes += 1, seconds:this.state.times.seconds = 0, miliseconds: this.state.times.miliseconds}})
		}
	}

	stop() {
		this.setState({running : false})
		clearInterval(this.watch);
	}

	saveResult(){ 
		const newResult = document.createElement("li");
		newResult.innerHTML = this.innerText;
		resultsList.appendChild(newResult);
	}

	resetResultList(){
	 resultsList.innerHTML = "";
	}

	render(){ 
		return(
			React.createElement('div',{},
				React.createElement('button',{onClick: this.start},'Start'),
				React.createElement('button',{onClick: this.stop},'Stop'),
				React.createElement('button',{onClick: this.reset},'Reset'),
				React.createElement('div',{},
					React.createElement('p',{}, this.print())
				),
				React.createElement('h1',{},'Lista Wyników'),
				React.createElement('ul',{id:"resultsList"},),
				React.createElement('button',{onClick: this.resetResultList}, 'Zresetuj listę'),
				React.createElement('button',{onClick: this.saveResult},'Zapisz wynik')
			)
		);
	}
}

function pad0(value){
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}

const stopWatch = React.createElement(Stopwatch,{});
ReactDOM.render(stopWatch, document.getElementById('stopwatch'));