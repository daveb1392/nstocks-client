import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";


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
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Sign Up
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
                Sign Up 
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupForm;
