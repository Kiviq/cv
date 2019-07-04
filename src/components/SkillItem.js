
import React, { Component } from 'react';
import Star from '../media/star.png';
import Star_a from '../media/star_a.png';
class SkillItem extends Component {
	render(props) {
		const starsTable = [];
		let end;
		const createElements = () =>{
			for (var i = 0; i <= 5; i++) {
				if (i < this.props.stars){
					//Tutaj pełna
					starsTable.push(<img src={Star_a} alt="alt"/>)
				} else{
					//Tutaj pusta
					// return <img src={Star} alt="alt"/>
					starsTable.push(<img src={Star} alt="alt"/>)
				}
			}
		}
		createElements()
		end = starsTable.map((element, index)=>{
			return <span key={index}>{element}</span>
		})
		return (
			<li className="col-6 col-md-4" >
				<label> {this.props.skill}</label>
				<ul>
				{end}
				</ul>
			</li>
		);
	}
}

export default SkillItem;