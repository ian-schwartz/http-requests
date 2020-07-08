import React, { Component } from "react";

class FullPost extends Component {
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="fullPost">
        <h1>Title</h1>
        <p>Content</p>
        <div className="edit">
          <button className="delete">Delete</button>
        </div>
      </div>
    );
    return post;
  }
}

export default FullPost;
