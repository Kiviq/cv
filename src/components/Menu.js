import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class menu extends Component {
	
	render(props) {
		let linksNames = ['Home', 'Skills', 'About', 'Experience', 'Hobby', 'Projects', 'Contact'];
		let linkUrls = ['/', '/skills', '/about', '/experience', '/hobby', '/projects', '/contact'];
		if (this.props.type === 'onepage'){
			linksNames = ['Home', 'Skills', 'About', 'Experience', 'Hobby', 'Projects', 'Contact'];
			linkUrls = ['#top', '#skills', '#about', '#experience', '#hobby', '#projects', '#contact'];
		} 
		const listItems = linksNames.map((link, index) =>{
			return <li key={index} className="nav-link"><Link to={linkUrls[index]}>{linksNames[index]} </Link></li>;
		});
		return (
			<div className="nav-list col-12 col-md-10">
				<ul className='for_desktop'>
					{listItems}
				</ul>
				<div className="menuIcon mobile_only">
					<span className="burger_icon">
					</span>
				</div>
			</div>
		);
	}
}

export default menu;


