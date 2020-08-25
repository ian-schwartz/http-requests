import React from "react";
import "./App.css";
import Blog from "./containers/Blog/Blog";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <Router basename="my-app">
    <Router>
      <div className="App">
        <Blog />
      </div>
    </Router>
  );
}

export default App;
