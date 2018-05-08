import React from "react";
import "./CaseStudies.css";
import {Helmet} from "react-helmet";

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
					<h1 className="case-stdy-title">{this.setCaseStudies().name}</h1>
					<img src={this.setCaseStudies().backgroundImage} alt=""/>
				</div>

		        <section className="marketing-site-three-up grid-x small-12 medium-12">
		                {
		                    caseStudies.map((study) => (
		                        <div className="feature-section cell small-12 medium-4">
		                            <img src={this.setCaseStudies().companyImage} aria-hidden="true"/><br/>
		                            <h4 className="marketing-site-three-up-title">{study.name}</h4>
		                            <p className="marketing-site-three-up-desc">{study.text}</p>
		                        </div>
		                    ))
		                }
		        </section>

				<div className="cs-textbox">
					<p className="cs-description">{this.setCaseStudies().text}</p>
				</div>

				<div className="case-studies">
					<div className="cs-card">
						<i className={this.setCaseStudies().icon}/>
						<h4 className="">{this.setCaseStudies().name}</h4>
						<p className="">{this.setCaseStudies().text}</p>
						<button className="round button">Learn More!</button>
					</div>
					<div className="cs-card">
						<i className={this.setCaseStudies().icon}/>
						<h4 className="">{this.setCaseStudies().name}</h4>
						<p className="">{this.setCaseStudies().text}</p>
						<button className="round button">Learn More!</button>
					</div>
					<div className="cs-card">
						<i className={this.setCaseStudies().icon}/>
						<h4 className="">{this.setCaseStudies().name}</h4>
						<p className="">{this.setCaseStudies().text}</p>
						<button className="round button">Learn More!</button>
					</div>
				</div>

				<div className="cta-bar">
					<p className="cta-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.Lorem ipsum dolor sit amet</p>
					<button className="round button">Contact Us</button>
				</div>

	            {/*Dynamically updates title tag and meta data in head section */}
	            <div className="application">
	                <Helmet>
	                    <meta charSet="utf-8" />
	                    <title>{this.setCaseStudies().name} : Tortellini</title>
	                    <link rel="canonical" href={"/casestudies/" + this.setCaseStudies().name} />
	                </Helmet>
	            </div>

			</div>





		)
	}
};

export default CaseStudies;