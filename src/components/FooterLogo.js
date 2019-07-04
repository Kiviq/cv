import React, { Component } from 'react';
import LogoFooter from '../media/out2.png';
class FooterLogo extends Component {
	render() {
		return (
			<div className='col-xs-12 col-sm-12 col-md-2 lg'>
				<img src={LogoFooter} alt="footer_logo"/>
			</div>
		);
	}
}

export default FooterLogo;