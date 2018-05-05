import React from "react";
import "./Blogs.css";

const Blogs = require("../../blogPosts.json");

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
		else if (name === blogPosts[3].name) {
			blogPost = blogPosts[3];
			return blogPost;
		}
	};


	render() {
		return(
			<div className="blogPosts">
				<h1 className="blog-title">{this.setBlogPosts().name}</h1>
				<img src={this.setBlogPosts().image} alt="case-study"/>
				<h2 className="">{this.setBlogPosts().bodyContent.subheadingOne}</h2>		
				<p className="">{this.setBlogPosts().bodyContent.pOne}</p>
				<h2 className="">{this.setBlogPosts().bodyContent.subheadingTwo}</h2>	
				<p className="">{this.setBlogPosts().bodyContent.pTwo}</p>
				<h2 className="">{this.setBlogPosts().bodyContent.subheadingThree}</h2>	
				<p className="">{this.setBlogPosts().bodyContent.pThree}</p>			
			</div>
		)
	}
};

export default Blogs;