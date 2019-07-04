import React, { Component } from 'react';
import Loveys from '../../media/lov.png';
import Wd from '../../media/wd.png';
class Side_projects extends Component {
	render() {
		return (
			<section id="sidePro">
			  	<div className="container-fluid">
			  		<div className="row sideprojects">
					  	<div className="col-12">
					  		<h3> My side projects</h3>
					  	</div>
					  	<div className="col-12 col-sm-12 col-md-4 project">
					  		<label>Loveys</label>
					  		<a href="https://www.loveys.pl" target="_blank" rel="noopener noreferrer"><img alt="loveys" src={Loveys}/></a>
					  		<p>
						  	This is an online store with handmade toys and accesories for toddlers and newborns. It has been created because my wife is very talented and we wanted to monetize a little on it. 
						  	</p>
					  	</div>
					  	<div className="col-12 col-sm-12 col-md-4 project">
						  	<label> wizytadomowa.pl</label>
						  	<a href="https://wizytadomowa.pl" target="_blank" rel="noopener noreferrer"><img alt="wizytadomowa" src={Wd}/></a>
						  	<p>
						  	It's a outcall searchengine for doctors, nurses, physiotherapist and other specialists and vets. Project is in creation phase. For now team counts 5 people. 
						  	</p>
					  	</div>
					  </div>
			  	</div>
			 </section>
		);
	}
}
export default Side_projects;