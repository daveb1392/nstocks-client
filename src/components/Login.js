import React from "react";
import { Form, Button } from "semantic-ui-react";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Form onSubmit={() => this.props.handleSubmit(this.state)}>
          <Form.Field>
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            placeholder="Password"
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

export default Login;

// edit form to take in correct format of dob
