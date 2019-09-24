import React from "react";
import { Form, Button } from "semantic-ui-react";

class SignupForm extends React.Component {
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
            type="email"
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChangePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

export default SignupForm;
