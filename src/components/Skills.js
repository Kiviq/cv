import React, { Component } from 'react';
import SkillItem from './SkillItem';
import JsonData from '../data.json';
import JsonContent from '../content.json';

class Skills extends Component {
	render() {
		const techSkills = JsonData.techSkills;
		const skillItems = techSkills.map((skill, index)=>{
			return <SkillItem key={index} stars={skill.stars} skill={skill.name} />
		})
		return (
			<div id="skills" className="container-full">
				<div className="row">
					<div className="col-12 header">
						<h3>{JsonContent.rest.skillsHeadline}</h3>
					</div>
					<div className="col-12 col-md-8 tech">
						<ul className="list">
							{skillItems}
						</ul>
					</div>

				</div>
			</div>
		);
	}
}

export default Skills;