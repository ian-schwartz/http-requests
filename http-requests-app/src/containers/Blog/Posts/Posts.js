import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../../FullPost/FullPost";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Ian",
          };
        });
        this.setState({ posts: updatedPosts });
        //   console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link to={'/posts/' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="posts">{posts}</section>
        <Route
          exact
          path={this.props.match.url + "/:id"}
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
