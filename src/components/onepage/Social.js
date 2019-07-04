import React, { Component } from 'react';

class Socials extends Component {
	render() {
		return (
			<section id="social">
			  <div className="container-fluid">
			  	<div className="row">
			  		<div className="col-xs-12 col-md-8">
			  		<h3>Chat with me on:</h3>
			  		<ul>
				  		<li>
				  			<a href="https://www.facebook.com/AllottedStone" target="_blank" rel="noopener noreferrer">
					  			<i className="icon-mm-facebook-app-logo"></i>
					  			<span>Facebook</span>
				  			</a>
				  		</li>
				  		<li>
					  		<a href="https://www.instagram.com/m_kiviq/?hl=pl" target="_blank" rel="noopener noreferrer">
						  		<i className="icon-mm-instagram-logo"></i>
						  		<span>Instagram</span>
					  		</a>
				  		</li>
				  		<li>
					  		<a href="https://www.linkedin.com/in/maciej-mikulski/" target="_blank" rel="noopener noreferrer">
						  		<i className="icon-mm-linkedin-logo"></i>
						  		<span>Linkedin</span>
					  		</a>
				  		</li>
			  		</ul>
			  		</div>
			  	</div>
			  </div>
			</section>
		);
	}
}

export default Socials;