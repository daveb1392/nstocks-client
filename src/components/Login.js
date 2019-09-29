import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";


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
      //   <Form onSubmit={() => this.props.handleSubmit(this.state)}>
      //       <Form.Field>
      //       <label>Email</label>
      //       <input
      //         value={this.state.email}
      //         onChange={this.handleChangeEmail}
      //         placeholder="Email"
      //       />
      //     </Form.Field>
      //     <Form.Field>
      //       <label>Password</label>
      //       <input
      //         type="password"
      //         value={this.state.password}
      //         onChange={this.handleChangePassword}
      //         placeholder="Password"
      //       />
      //     </Form.Field>
      //     <Button type="submit">Login</Button>
      //   </Form>
      // );
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Login
          </Header>
          <Segment>
            <Form
              size="large"
              onSubmit={() => this.props.handleSubmit(this.state)}
            >
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="Email address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                value={this.state.password}
                onChange={this.handleChangePassword}
                placeholder="Password"
                type="password"
              />
              <Button color="blue" fluid size="large">
                Login
              </Button>
            </Form>
          </Segment>
          <Message>
            Not registered yet?{" "}
            <NavLink to="/signup" exact>
              Sign up
            </NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

// edit form to take in correct format of dob
