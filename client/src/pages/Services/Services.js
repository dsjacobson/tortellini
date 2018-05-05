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
                    <h3 className="service-title">{this.setService().name}</h3>
                    <img src={this.setService().backgroundImage} alt=""/>
                </div>

                <div className="service-content">
                    <p className="">{this.setService().content.sectionContent}</p>
                </div>

                <div className="marketing-site-three-up grid-x medium-12">
                    <div className="cell medium-4">
                        <i className="fi-graph-bar" aria-hidden="true" width="50px" height="auto"/>
                        <h4 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceOne}</h4>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionOne}</p>
                    </div>
                
                    <div className="cell medium-4">
                        <i className={this.setService().content.secondaryServices.secIconTwo} aria-hidden="true"/>
                        <h4 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceTwo}</h4>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionTwo}</p>
                    </div>
                    <div className="cell medium-4">
                        <i className={this.setService().content.secondaryServices.secIconThree} aria-hidden="true"/>
                        <h4 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceThree}</h4>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionThree}</p>
                    </div>
                </div>
                    <div className="cta-bar">
                        <p className="cta-message">{this.setService().content.ctaMessage}</p>
                        <button className="cta-button">Contact Us</button>
                    </div>

            </div>
        )
    }
}




export default Services;