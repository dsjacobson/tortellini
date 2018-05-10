import React from "react";
import "./CreateBlogPosts.css";
import API from "../../utils/API";

const CreateBlogPost = require("../../blogPosts.json");


class Blogs extends Component {
  state = {
    blogs: [],
    title: "",
    author: "",
    content: ""
  };

  componentDidMount() {
  	this.loadBlogs();
  }

  loadBlogs = () => {
  	API.getBlogs()
  		.then(res =>
  			this.setState({blogs: res.data, title: "", author: "", content: ""})
  			)
  		.catch(err => console.log(err));
  }

  deleteBlog = id => {
  	API.deleteBlog(id)
  		.then(res => this.loadBlogs())
  		.catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  	event.PreventDefault();
  	if(this.state.title && this.state.author) {
  		API.saveBlog({
  			title: this.state.title,
  			author: this.state.author,
  			content: this.state.content
  		})
  			.then(res => this.loadBlogs())
  			.catch(err => console.log(err));
  	}
  };

	render() {
	    return (
	      	<Container fluid>
		        <Row>
		          	<Col size="md-12">
			            <div>
			              <h1>Create A New Blog Post</h1>
			            </div>
			            <form>
			              <Input
			                value={this.state.title}
			                onChange={this.handleInputChange}
			                name="title"
			                placeholder="Title (required)"
			              />
			              <Input
			                value={this.state.author}
			                onChange={this.handleInputChange}
			                name="author"
			                placeholder="Author (required)"
			              />
			              <TextArea
			                value={this.state.content}
			                onChange={this.handleInputChange}
			                name="content"
			                placeholder="blog entry"
			              />
			              <FormBtn
			                disabled={!(this.state.author && this.state.title && this.state.content)}
			                onClick={this.handleFormSubmit}
			              >
			                Submit Blog Post
			              </FormBtn>
			            </form>
			       	</Col>
			    </Row>
		 	</Container>
		);
	}
}

export default CreateBlogPosts;