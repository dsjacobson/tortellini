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
		else if (name === blogs[3].name) {
			blog = blogs[3];
			return blog;
		}
	}
};

render() {
	return(

		<div className="case-studies-header">
			<h1 className="case-stdy-title">Blog Posts</h1>
			<img src={this.setCaseStudies().backgroundImage} alt=""/>
		</div>

		<div className="blogPosts">
			<img src={this.setBlog().image} alt="case-study"/>
			<h3 className="blog-title">{this.setBlog().name}</h3>
			<p className="">{this.setBlog().shortDesc}</p>
		</div>

		<div className="blogPosts">
			<img src={this.setBlog().image} alt="case-study"/>
			<h3 className="blog-title">{this.setBlog().name}</h3>
			<p className="">{this.setBlog().shortDesc}</p>
		</div>

		<div className="blogPosts">
			<img src={this.setBlog().image} alt="case-study"/>
			<h3 className="blog-title">{this.setBlog().name}</h3>
			<p className="">{this.setBlog().shortDesc}</p>
		</div>

		<div className="blogPosts">
			<img src={this.setBlog().image} alt="case-study"/>
			<h3 className="blog-title">{this.setBlog().name}</h3>
			<p className="">{this.setBlog().shortDesc}</p>
		</div>


	)
}


export default Blog;