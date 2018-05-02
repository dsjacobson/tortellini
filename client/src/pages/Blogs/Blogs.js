import React from "react";
import "./Blogs.css";

const blogs = require("../../blogPsts.json");

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
	}
};

render() {
	return(
		<div className="blogPosts">
			<h1 className="blog-title">{this.setBlogPosts().name}</h1>
			<img src={this.setBlogPosts().image} alt="case-study"/>
			<h2 className="">{this.setBlogPosts().body-content.subheadingOne}</h2>		
			<p className="">{this.setBlogPosts().body-content.pOne}</p>
			<h2 className="">{this.setBlogPosts().body-content.subheadingTwo}</h2>	
			<p className="">{this.setBlogPosts().body-content.pTwo}</p>
			<h2 className="">{this.setBlogPosts().body-content.subheadingThree}</h2>	
			<p className="">{this.setBlogPosts().body-content.pThree}</p>			
		</div>
	)
}


export default Blogs;