import React from "react";
import "./BlogPost.css"

const services = require("../../services.json");
const caseStudies = require("../../caseStudies.json");

const BlogPost = (props) => (

	<div>
		<h1><a href={"/blogs/" + props.id}>{props.title}</a></h1>
		<div>
			<p>{props.author} {props.date}</p>
		</div>
		<div>
			<img src={props.image} alt=""/>
			<p>{props.content}</p>
		</div>
	
	</div>


);

export default BlogPost;