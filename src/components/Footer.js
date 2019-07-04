import React, { Component } from 'react';
import FooterLogo from './FooterLogo';
import ContactSection from './ContactSection'
export class footer extends Component {
	render() {
		return (
			<footer>
				<div className="container-full">
					<div className="row">
						<FooterLogo/>
						<ContactSection/>
					</div>
				</div>
			</footer>
		);
	}
}

export default footer;