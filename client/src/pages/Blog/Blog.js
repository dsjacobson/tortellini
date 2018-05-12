import React from "react";
import "./Blog.css";
import {Helmet} from "react-helmet";

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
				<div className="blog-header">
					<h1 className="case-stdy-title">Tortellini Blog</h1>
				</div>

				<section>
					{
				            blogs.map((blog) => (
			                <div className="grid-x medium-12">
			                	<div className="cell medium-3">
			                	</div>
				                <div className="feature-section-blog grid-x medium-6">
					                <div className="feature-section-blog cell small-12 cell medium-3">    
					                    <img src={blog.image} aria-hidden="true"/>
					                </div>
					                <div className="blog-title-descr cell small-12 medium-6">    
					                    <h4 className="marketing-site-three-up-title"><a href="/">{blog.name}</a></h4>
					                    <p className="marketing-site-blog-three-up-desc">{blog.shortDesc}</p>
					                </div>
					            </div>
			                	<div className="cell medium-3">
			                	</div>				                
				            </div>
			            ))
		        	}
		        </section>

	            {/*Dynamically updates title tag and meta data in head section */}
	            <div className="application">
	                <Helmet>
	                    <meta charSet="utf-8" />
	                    <title>Digital Marketing Blog : Tortellini</title>
	                    <meta name="description" content="Check out our blog to learn about digital marketing trends, tips and hacks to increase web traffic." />
	                    <link rel="canonical" href="/blog" />
	                </Helmet>
	            </div>

			</div>

		)
	}
};


export default Blog;