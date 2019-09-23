import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import API from "./adapters/API.js";
import IndexPage from "./container/IndexPage";
import SignupForm from "./components/SignupForm.js";
import Login from "./components/Login.js";

import { Route, withRouter } from "react-router-dom";


class App extends React.Component {
  state = {
    user: null,
   
  };

  componentDidMount() {
    API.validateUser().then(user => {
      this.setState({ user });
    });
  }


  signUp = user => {
    API.signUp(user).then(user => this.setState({ user }));
    this.props.history.push("/");
  };

  logIn = user => {
    API.logIn(user).then(user => this.setState({ user }));
    this.props.history.push("/");
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} logOut={this.logOut} />

        <Route
          exact
          path="/"
          component={() => (
            <IndexPage
              user={this.state.user}
            />
          )}
        />
        <Route
          path="/login"
          component={props => <Login {...props} handleSubmit={this.logIn} />}
        />
        <Route
          path="/signup"
          component={props => (
            <SignupForm {...props} handleSubmit={this.signUp} />
          )}
        />
      
      </div>
    );
  }
}

export default withRouter(App);
