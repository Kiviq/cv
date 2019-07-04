import React, { Component } from 'react';
import JsonContent from '../content.json';

class HomeBanner extends Component {
	render() {
		return (
				<div id="top">
					<div id="par" className="container">
					</div>
					<div className="text">
						<h1>{JsonContent.banner.headline}</h1>
						<p>{JsonContent.banner.baseline}</p>
					</div>
				</div>
		);
	}
}

export default HomeBanner;