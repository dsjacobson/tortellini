import React from "react";
import "./Blog.css";

const blogs = require("../../blogPosts.json");

class Blog extends React.Component {

	setBlog = () => {

		const name = this.props.match.params.name;
		let blog ="";

		if (name === blogs[0].name) {
			blog = blogs[0];
			return blog;
		}
		else if (name === blogs[1].name) {
			blog = blogs[1];
			return blog;
		}
		else if (name === blogs[2].name) {
			blog = blogs[2];
			return blog;
		}
	}
};

render() {
	return(
		<div className="blogPosts">
			<h3 className="service-title">{this.setCaseStudies().name}</h3>
			<img src={this.setCaseStudies().images} alt="case-study"/>
		</div>

		<div className="service-description">
			<h3 className="">{this.setCaseStudies().text}</h3>
		</div>

	)
}


export default Blog;