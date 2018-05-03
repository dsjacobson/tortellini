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

		else if (name === caseStudies[3].name) {
			caseStudy = caseStudies[3];
			return caseStudy;
		}
	};


	render() {
		return(
			<div>
				<div className="case-studies-header">
					<h3 className="case-stdy-title">{this.setCaseStudies().name}</h3>
					<img src={this.setCaseStudies().backgroundImage} alt=""/>
				</div>

				<div className="cs-textbox">
					<p className="cs-description">{this.setCaseStudies().text}</p>
				</div>

				<div className="case-studies">
					<div className="cs-card">
						<i className={this.setCaseStudies().icon}/>
						<h4 className="">{this.setCaseStudies().name[0]}</h4>
						<button className="casestudy-btn">Learn More!</button>
					</div>
					<div className="cs-card">
						<i className={this.setCaseStudies().icon}/>
						<h4 className="">{this.setCaseStudies().name[1]}</h4>
						<button className="casestudy-btn">Learn More!</button>
					</div>
					<div className="cs-card">
						<i className={this.setCaseStudies().icon}/>
						<h4 className="">{this.setCaseStudies().name[2]}</h4>
						<button className="casestudy-btn">Learn More!</button>
					</div>
				</div>

				<div className="cta-bar">
					<p className="cta-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet</p>
					<button className="cta-button">Contact Us</button>
				</div>
			</div>
		)
	}
};

export default CaseStudies;