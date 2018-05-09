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
				<div className={"case-studies-header-" + this.setCaseStudies().cssBackground}>					
					<h1 className="case-stdy-title">{this.setCaseStudies().name}</h1>
				</div>
		        
                <div className="marketing-site-three-up case-study-three grid-x medium-12">
                    <div className="cell medium-4">
                        <img src={this.setCaseStudies().workDoneImage} alt=""/>
                        <h3 className="marketing-site-three-up-title">Work Done</h3>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().workDone}</p>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().workDoneTwo}</p>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().workDoneThree}</p>
                    </div>
                
                    <div className="cell medium-4">
                        <img src={this.setCaseStudies().challengesImage} alt=""/>
                        <h3 className="marketing-site-three-up-title">Challenges</h3>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().challenges}</p>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().challengesTwo}</p>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().challengesThree}</p>
                    </div>
                    <div className="cell medium-4">
                        <img src={this.setCaseStudies().resultsImage} alt=""/>
                        <h3 className="marketing-site-three-up-title">Results</h3>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().results}</p>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().resultsTwo}</p>
                        <p className="marketing-site-three-up-desc">{this.setCaseStudies().resultsThree}</p>
                    </div>
                </div>

	            {/*Dynamically updates title tag and meta data in head section */}
	            <div className="application">
	                <Helmet>
	                    <meta charSet="utf-8" />
	                    <title>{this.setCaseStudies().titleTag} : Tortellini</title>
                        <meta name="description" content={this.setCaseStudies().metaDescription} />	                    
	                    <link rel="canonical" href={"/casestudies/" + this.setCaseStudies().name} />
	                </Helmet>
	            </div>

			</div>

		)
	}
};

export default CaseStudies;