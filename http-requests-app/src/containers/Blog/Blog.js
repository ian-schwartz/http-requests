import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import FullPost from "../FullPost/FullPost";
import NewPost from "../FullPost/NewPost/NewPost";
import { Route, NavLink, Switch } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    // Examples
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route exact path="/" render={() => <h1>Home</h1>} /> */}
        <Route exact path="/" component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route exact path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
