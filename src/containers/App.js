//import React, { Component, useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';  
import ErrorBoundry from '../components/ErrorBoundry.js'
import './App.css';  

// const App = () => {
// 	return (
// 		<div className ='tc'>
// 			<h1>RoboFriends</h1>
// 			<SearchBox/>
// 			<CardList robots={robots}/>
// 		</div>	
// 	);
// }

// class App extends Component {
//  	constructor() {
//  		super()
//  		this.state = {
//  			robots: [],
//  			searchfield: ' '
//  		}
//  	}

//  	componentDidMount(){
//  		fetch('https://jsonplaceholder.typicode.com/users')
// 	 		.then(response => response.json())
// 	 		.then(users => this.setState({ robots: users }));
//  	}

//  	onSearchChange = (event) => {
//  		this.setState({ searchfield: event.target.value })
//  	}

// 	render() {
// 		const { robots, searchfield } = this.state;
//  		const filteredRobots = robots.filter(robot => {
//  			//return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//  			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//  		})
//  		//if(robots.length === 0){
//  		// if(!robots.length){
//  		// 	return <h1 className='tc'>Loading...</h1> 
//   		// } else {
// 			return !robots.length ?
// 			<h1>Loading</h1> :
// 			(    
// 				<div className='tc'>
// 					<h1 className='f1'>RoboFriends</h1>
// 					<SearchBox searchChange={this.onSearchChange} />
// 					<Scroll>
// 						<ErrorBoundry>
// 							<CardList robots={filteredRobots} />
// 						</ErrorBoundry>
// 					</Scroll>
// 				</div>	
// 			);	
//  		//}
// 	}
// }

function App() {
	const [ robots, setRobots ] = useState([]);
	const [ searchfield, setSearchfield ] = useState('');
	const [ count, setCount ] = useState(0);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
	 		.then(response => response.json())
	 		.then(users => setRobots(users));
	},[]) // 2.arg : only run when [...] changes > [empty] == initially(one time at the 1. render)

	const onSearchChange = (event) => {
 		setSearchfield(event.target.value )
 	}

 	const filteredRobots = robots.filter(robot => {
 		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
 	})
 
	return !robots.length ?
			<h1>Loading...</h1> :
			(    
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<button onClick={() => setCount(count + 1)}>Click me</button>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>	
			);
}

export default App; 



