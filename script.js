
class Stopwatch extends React.Component {
	constructor() {
		super();
		this.state = {
			running: false,
			times : {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
			resultsArray: []
		};
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset= this.reset.bind(this);
		this.saveResult=this.saveResult.bind(this);
		this.resetResultList = this.resetResultList.bind(this);
	}
	
	print() {
		//console.log(this.format(this.state.times));	
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
		this.setState({
			resultsArray: [...this.state.resultsArray, this.print()]
		});
		//console.log(this.state.resultsArray);
	}

	resetResultList(){
	 this.setState({
			resultsArray: []
		});
	}

	render(){ 
		return(
			<div>
				<button onClick = {this.start}>{"Start"}</button>
				<button onClick = {this.stop}>{"Stop"}</button>
				<button onClick = {this.reset}>{"Reset"}</button>
				<div>
					<p>{this.print()}</p>
				</div>
				<div>
					<h1>{"Lista Wyników"}</h1>
					<ResultList resultsInArray = {this.state.resultsArray} />
					<button onClick = {this.saveResult}>{"Zapisz wynik"}</button>
					<button onClick = {this.resetResultList}>{"Resetuj tablicę"}</button>
				</div>
			</div>
		);
	}
}

class ResultList extends React.Component {
	propTypes: {
		resultsInArray: React.PropTypes.Array.IsRequired
	}
	constructor(resultsInArray){
		super()
	}

	render(){
		//console.log(this.props.resultsInArray);
		const table = this.props.resultsInArray.map((result) => {
			return <li key={result}>{result}</li> });
		//console.log(table);
		return (
			<ul>{table}</ul>
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







/*
class ResultList extends React.Component {
<ResultList timeValue={this.print()} />
	propTypes: {
		timeValue: React.PropTypes.string.IsRequired
	}

	constructor(timeValue){
		super(timeValue);
		this.state={
			timeResultTable: [] 
		};
		this.saveResult=this.saveResult.bind(this);
	}

	saveResult(){
	this.setState({timeResultTable: this.props.timeValue})
	console.log(this.state.timeResultTable);
	}



	
	render(){
		return(
				
		);
	}
}

/*ResultList.propTypes = {
	
}
*/


