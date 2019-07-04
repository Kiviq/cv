import React, { Component } from 'react';
import HomeBanner from '../../components/HomeBanner';
import Skills from '../../components/Skills';
import Socials from './Social';
import Hobbies from '../../components/Hobby';
import Portfolio from './Portfolio';
import SideProjects from './Side_projects';
import AboutAll from './About';
export class HomeAll extends Component {
	render() {
		return (
			<div className="content home_page ">
				< HomeBanner/>
				< Skills/>
				< AboutAll/>
				<Portfolio />
				<SideProjects/>
				< Hobbies />
				< Socials />
			</div>
		);
	}
}

export default HomeAll;

