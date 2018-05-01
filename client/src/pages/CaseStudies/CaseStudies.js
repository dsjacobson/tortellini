import React from "react";
import "./CaseStudies.css";

const caseStudies = require("../../caseStudies.json");

class CaseStudies extends React.Component {

	setCaseStudies = () => {

		const name = this.props.match.params.name;
		let caseStudy ="";

		if (name === caseStudies[0].name) {
			caseStudy = caseStudies[0];
			return caseStudy;
		}
		else if (name === caseStudies[1].name) {
			caseStudy = caseStudies[1];
			return caseStudy;
		}
		else if (name === caseStudies[2].name) {
			caseStudy = caseStudies[2];
			return caseStudy;
		}
	}
};

render() {
	return(
		<div className="case-studies-header">
			<h3 className="service-title">{this.setService().name}</h3>
			<img src={this.setService().backgroundImage} alt=""/>
		</div>

		<div className="service-description">
			<h3 className="">{this.setCaseStudies().text}</h3>
		</div>

	)
}


export default CaseStudies;