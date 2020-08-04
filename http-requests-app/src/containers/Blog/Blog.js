import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../FullPost/NewPost/NewPost";
import { Route, Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: "/new-post",
                  // Examples
                  hash: "#submit",
                  search: "?quick-submit=true"
                }}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route exact path="/" render={() => <h1>Home</h1>} /> */}
        <Route exact path="/" component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
