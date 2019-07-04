import React, { Component } from 'react';
import JobPosition from '../../components/JobPosition';
import JsonData from '../../data.json';
import JsonContent from '../../content.json';
class Portfolio extends Component {

	render() {
		const jobList = JsonData.jobList;
		const jobItems = jobList.map((el, index) =>{
			let El = jobList[index];
			return < JobPosition key={index} logo={El.logo} position={El.position} company={El.company} time={El.time} url={El.url} duties={El.duties} desc={El.description} />
		})
		return (
			<section id="portfolio">
				  <div className="container-fluid">
				  <h3>{JsonContent.rest.portfolioHeadline}</h3>
					  <div className="row exp">
						  <div className="col-12 col-md-10 list">
						  	{jobItems}						  
						</div>
					</div>
				</div>
			</section>
		);
	}
}


export default Portfolio;