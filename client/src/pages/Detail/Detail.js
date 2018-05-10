import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    blog: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBlogPost(this.props.match.params.id)
      .then(res => this.setState({ blog: res.data }))
      .catch(err => console.log(err));
  }



  render() {
    return(
      <div className="grid-x">
        <div>
          <h1 className="blog-title">
            {this.state.blog.title}
          </h1>

          <p className="">
            {this.state.blog.content}
          </p>
        </div>

  
      </div>
    );
  }
}

export default Detail;