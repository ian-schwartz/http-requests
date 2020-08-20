import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../FullPost/NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog extends Component {
  state = {
    auth: false,
  };

  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/posts/"
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
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
