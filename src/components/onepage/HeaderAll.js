
import React, { Component } from 'react';
import {render} from 'react-dom'
import Menu from '../../components/Menu'

export class HeaderAll extends Component {
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
	
	fixThat = (e) => {
		if (window.pageYOffset > document.querySelector('header').clientHeight + 30){
			console.log()
			document.querySelector('header').classList.add('fixed')
		} else {
			document.querySelector('header').classList.remove('fixed')

		}
	}
	render() {
		return (
			<header className="header_flex onepage">
				< Menu type="onepage"/>
			</header>
		);
	}
}



export default HeaderAll;