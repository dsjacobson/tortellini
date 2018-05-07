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
	};

	render() {
		return(

			<div>
				<div className="case-studies-header">
					<h1 className="case-stdy-title">Blog Posts</h1>
					<img src={blogs[0].backgroundImage} alt=""/>
				</div>

			<section>
				{
			            blogs.map((blog) => (
		                <div className="feature-section cell small-12 medium-4">
		                    <img src={blog.image} aria-hidden="true"/>
		                    <h4 className="marketing-site-three-up-title"><a href="/">{blog.name}</a></h4>
		                    <br/>
		                    <p className="marketing-site-blog-three-up-desc">{blog.shortDesc}</p>
		                </div>
		            ))
	        	}
	        </section>

			</div>

		)
	}
};


export default Blog;