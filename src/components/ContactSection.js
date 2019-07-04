import React, { Component } from 'react';

class ContactSection extends Component {
	render() {
		return (
			<div className="col-xs-12 col-sm-12 col-md-2 contact">
				<h4>Contact me, let's talk</h4>
				<h5>Maciej Mikulski</h5>
				<div className="col-xs-12">
					<div className="pos">
						<label>E-mail</label>
						<span><a href="mailto:domikuly@gmail.com">domikuly@gmail.com</a></span>
					</div>
					<div className="pos">
						<label>Phone no.</label>
						<span> +48 608 297 757</span>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactSection;