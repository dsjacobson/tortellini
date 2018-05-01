import React from "react";
import "./Blogs.css";

const blogs = require("../../.json");

class blogPosts extends React.Component {

	setBlogPosts = () => {

		const name = this.props.match.params.name;
		let blogPost ="";

		if (name === blogPosts[0].name) {
			blogPost = blogPosts[0];
			return blogPost;
		}
		else if (name === blogPosts[1].name) {
			blogPost = blogPosts[1];
			return blogPost;
		}
		else if (name === blogPosts[2].name) {
			blogPost = blogPosts[2];
			return blogPost;
		}
	}
};

render() {
	return(
		<div className="caseStudyCard">
			<h3 className="service-title">{this.setCaseStudies().name}</h3>
			<img src={this.setCaseStudies().images} alt="case-study"/>
		</div>

		<div className="service-description">
			<h3 className="">{this.setCaseStudies().text}</h3>
		</div>

	)
}


export default Blogs;