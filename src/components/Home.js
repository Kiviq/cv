import React, { Component } from 'react';
import HomeBanner from './HomeBanner';
import Skills from './Skills'
class Home extends Component {
	render() {
		return (
			<div className="content home_page normal ">
				<HomeBanner/> 
				<Skills/>
			</div>
		);
	}
}

export default Home;