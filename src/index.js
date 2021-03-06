import React from 'react';
import ReactDOM from 'react-dom';
import './container/IndexPage';
import App from './App';
import "semantic-ui-css/semantic.min.css";
// import "semantic-ui-css/semantic.js";
// import "bootstrayp/dist/css/bootstrap.min.css";
// import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

