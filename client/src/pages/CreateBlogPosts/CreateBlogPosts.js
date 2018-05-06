import React from "react";
import "./CreateBlogPosts.css";

const CreateBlogPost = require("../../blogPosts.json");


class CreateBlogPosts extends Component {
  state = {
    blogs: [],
    title: "",
    author: "",
    content: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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