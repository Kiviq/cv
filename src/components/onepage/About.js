import React, { Component } from 'react';
import JsonContent from '../../content.json';

class AboutAll extends Component {
	render() {
		let firstPar = JsonContent.about.secPar.split('\n').map((i, index) => {
		    return <p key={index}>{i}</p>
		});
		return (
			<section id="about">
				<div className="container-fluid">
				  	<div className="row">
				  		<div className="col-xs-12 col-sm-12 col-md-12 info">
					  		<h1>
					  			{JsonContent.about.headline}
					  		</h1>
					  		<p>{JsonContent.about.firstPar}</p>
					  		<div>
					  			{firstPar}
					  		</div>
				  		</div>
				  	</div>
				</div>
			</section>
		);
	}
}

export default AboutAll;