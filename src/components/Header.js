import React, { Component } from 'react';
import {render} from 'react-dom'
import Menu from './Menu'
import Logo from './Logo'
export class header extends Component {
	componentDidMount(){
		window.addEventListener('wheel', this.fixThat);
		let jokesDeployed = 0;
		function randomIntFromInterval(min,max){
		    return Math.floor(Math.random()*(max-min+1)+min);
		}
		setInterval(()=>{
			jokesDeployed++
			console.log(randomIntFromInterval(1, 100), jokesDeployed)
		}, 60000)

	}
	
	nav = React.createRef();
	fixThat = (e) => {
		if (window.pageYOffset > this.nav.current.clientHeight + 30){
			console.log(document.getElementById('top'))
			this.nav.current.classList.add('fixed')
		} else {
			this.nav.current.classList.remove('fixed')

		}
	}
	render() {
		return (
			<header ref={this.nav} className="header_flex">
				<Logo/>
				< Menu/>
			</header>
		);
	}
}



export default header;