import React from "react";
import "./Services.css";

const services = require("../../services.json");

class Services extends React.Component {

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
	};

    render() {
        return(
            <div className="grid-x">
                <div className="service-header">
                    <h1 className="service-title">{this.setService().name}</h1>
                    <img src={this.setService().backgroundImage} alt=""/>
                </div>

                <div className="service-content">
                    <p className="">{this.setService().content.sectionContent}</p>
                </div>

                <div className="marketing-site-three-up grid-x medium-12">
                    <div className="cell medium-4">
                        <i className="fi-graph-bar" aria-hidden="true" width="50px" height="auto"/>
                        <img src={this.setService().content.secondaryServices.serviceImage1} alt=""/>
                        <h3 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceOne}</h3>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionOne}</p>
                    </div>
                
                    <div className="cell medium-4">
                        <i className={this.setService().content.secondaryServices.secIconTwo} aria-hidden="true"/>
                        <img src={this.setService().content.secondaryServices.serviceImage2} alt=""/>
                        <h3 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceTwo}</h3>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionTwo}</p>
                    </div>
                    <div className="cell medium-4">
                        <i className={this.setService().content.secondaryServices.secIconThree} aria-hidden="true"/>
                        <img src={this.setService().content.secondaryServices.serviceImage3} alt=""/>
                        <h3 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceThree}</h3>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionThree}</p>
                    </div>
                </div>
                    <div className="cta-bar cell medium 12">
                        <p className="cta-message">{this.setService().content.ctaMessage}</p>
                        <button className="cta-button round button">Contact Us</button>
                    </div>

            </div>
        )
    }
}




export default Services;