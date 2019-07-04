import React, { Component } from 'react';
import JsonContent from '../content.json';

class Hobby extends Component {
	render() {
		let hobbiesList = JsonContent.hobbies.items;
		const HoobyItems = hobbiesList.map((el, index)=>{
			return <li key={index}> {el}</li>
		});
		return (
			<section id="hobbies">
			  <div className="container-fluid">
			  	<div className="row">
			  		<div className="col-xs-12">
				  		<h3>{JsonContent.hobbies.headline}</h3>
				  		<ul>
				  			{HoobyItems}
				  		</ul>
			  		</div>
			  	</div>
			  </div>
			</section>
		);
	}
}

export default Hobby;