import React, { Component } from 'react';
import JsonContent from '../content.json';

class JobPosition extends Component {
	render(props) {
		let element;
		if (this.props.url === ""){
			 element = this.props.company;
		} else {
			 element = <a href={this.props.url} target="_blank" rel="noopener noreferrer"><img alt="_logo" src={this.props.logo}/></a>;
		}
		const dutiesList = this.props.duties.map((el, index)=>{
			return <li key={index}>{el}</li>
		});
		return (
			<div className="job col-xs-12">
				<div className="job-title col-xs-12 col-sm-12 col-md-3">
					<label>{JsonContent.jobs.position}</label>
					{this.props.position}
				</div>
				<div className="job-company col-xs-12 col-sm-12 col-md-2">
					<label>{JsonContent.jobs.company}</label>
					{element}
				</div>
				<div className="job-time col-xs-12 col-sm-12 col-md-5">
					<label>{JsonContent.jobs.time}</label>
					{this.props.time}
					
				</div>
				<div className="duties col-xs-12 col-sm-12 col-md-5">
					<label>{JsonContent.jobs.duties}</label>
					<ul>
						{dutiesList}
					</ul>
				</div>
				<div className="desc col-xs-12 col-sm-12 col-md-5">
					<label>{JsonContent.jobs.description}</label>
					{this.props.desc}
				</div>
			</div>
		);
	}
}

export default JobPosition;