import React, { Component } from "react";
import axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((res) => {
            this.setState({ loadedPost: res.data });
          });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="fullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="edit">
            <button className="delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;