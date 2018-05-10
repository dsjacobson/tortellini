import React from "react";
import "./Blog.css";
import {Helmet} from "react-helmet";
import API from "../../utils/API";
import BlogPost from "../../components/BlogPost";

const blogs = require("../../blogPosts.json");

class Blog extends React.Component {
	state = {
    	blog: {}
  	};

	componentDidMount() {
	    API.getBlogPost(this.props.match.params.id)
	      .then(res => this.setState({ blog: res.data }))
	      .catch(err => console.log(err));
 	}


	render() {
		return(

			<div>
				<div className="blog-header">
					<h1 className="case-stdy-title">Tortellini Blog</h1>
				</div>

				<section>
					{
				        this.state.blog((blog) => (
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




			    <div className="medium-12">
	                {
	                    this.state.blog.map((blogPost) => (
	                        <Blog
	                        	id = {blogPost._id}
	                        	author = {blogPost.author}
	                        	date = {blogPost.date}
	                        	title = {blogPost.title}
	                        	content = {blogPost.content}
	                        	image = {blogPost.image}
	                        />
	                    ))
	                }
	        	</div>





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