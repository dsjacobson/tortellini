import React from "react";
import "./Services.css";
import {Helmet} from "react-helmet";

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
                <div className={"service-header-" + this.setService().cssBackground}>
                    <h1 className="service-title">{this.setService().name}</h1>

                </div>

                <div className="service-content grid-x medium-12">
                    <div className="cell medium-2">
                    
                    </div>
                    
                    <div className="cell medium-8">
                        <h2 className="service-content">{this.setService().content.sectionTitle}</h2>
                        <p className="service-content">{this.setService().content.sectionContent}</p>
                    </div>
                    <div className="cell medium-2">
                    
                    </div>
                </div>

                <div className="marketing-site-three-up grid-x medium-12">
                    <div className="cell medium-4">
                        <img src={this.setService().content.secondaryServices.serviceImage1} alt=""/>
                        <h3 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceOne}</h3>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionOne}</p>
                    </div>
                
                    <div className="cell medium-4">
                        <img src={this.setService().content.secondaryServices.serviceImage2} alt=""/>
                        <h3 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceTwo}</h3>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionTwo}</p>
                    </div>
                    <div className="cell medium-4">
                        <img src={this.setService().content.secondaryServices.serviceImage3} alt=""/>
                        <h3 className="marketing-site-three-up-title">{this.setService().content.secondaryServices.secServiceThree}</h3>
                        <p className="marketing-site-three-up-desc">{this.setService().content.secondaryServices.secDescriptionThree}</p>
                    </div>
                </div>

                <div className="service-content grid-x medium-12">
                    <div className="cell medium-2">
                    
                    </div>
                    
                    <div className="cell medium-8">
                        <h3 className="service-content">{this.setService().content.titleTwo}</h3>
                        <p className="service-content">{this.setService().content.contentTwo}</p>
                    </div>
                    <div className="cell medium-2">
                    
                    </div>
                </div>


                <div className="cta-bar cell medium 12">
                    <h5 className="cta-message">Learn how we can help your business with {this.setService().name}!</h5>
                    <button className="cta-button round button">Contact Us</button>
                </div>

                    {/*Dynamically updates title tag and meta data in head section */}
                <div className="application">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{this.setService().name} : Tortellini</title>
                        <link rel="canonical" href={this.setService().name} />
                    </Helmet>
                </div>




            </div>


        )
    }
}




export default Services;