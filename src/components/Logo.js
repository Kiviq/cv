import React, { Component } from 'react';
import LogoUrl from '../media/logo.png';
class Logo extends Component {
	render() {
		return (
			<div className="logo col-12 col-md-2">
				<img src={LogoUrl} alt="logo"/>
			</div>
		);
	}
}

export default Logo;