import React from "react";
import "./Services.css";

const services = require("../../services.json");

class Service extends React.Component {

	setService = () => {

		const name = this.props.match.params.name;
		let service ="";

		if (name === services[0].name) {
			service = services[0];
			return service;
		}
		else if (name === services[1].name) {
			service = services[1];
			return service;
		}
		else if (name === services[2].name) {
			service = services[2];
			return service;
		}
	}
};

render() {
	return(
		<div className="service-header">
			<h3 className="service-title">{this.setService().name}</h3>
			<img src={this.setService().backgroundImage} alt=""/>
		</div>

		<div className="service-content">
			<p className="">{this.setService().content.sectionContent}</p>
		</div>

		<div className="secondary-services">
			<div className="sec-service-card">
				<i className={this.setService().secondaryServices.secIconOne}></i>
				<h4 className="sec-cat-card">{this.setService().secondaryServices.secServiceOne}</h4>
				<p className="sec-cat-card">{this.setService().secondaryServices.secDescriptionOne}</p>
			</div>
			<div className="sec-service-card">
				<i className={this.setService().secondaryServices.secIconTwo}></i>
				<h4 className="sec-cat-card">{this.setService().secondaryServices.secServiceTwo}</h4>
				<p className="sec-cat-card">{this.setService().secondaryServices.secDescriptionTwo}</p>
			</div>
			<div className="sec-service-card">
				<i className={this.setService().secondaryServices.secIconThree}></i>
				<h4 className="sec-cat-card">{this.setService().secondaryServices.secServiceThree}</h4>
				<p className="sec-cat-card">{this.setService().secondaryServices.secDescriptionThree}</p>
			</div>
		</div>

		<div className="cta-bar">
			<p className="cta-message">{this.setService().content.ctaMessage}</p>
			<button className="cta-button">Contact Us</button>
		</div>

	)
}


export default Services;