import React, { Component } from "react";
import PropTypes from "prop-types";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };

  handleChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleRegister = () => {
    let id = this.state.username;
    let pw = this.state.password;

    this.props.onRegister(id, pw).then(result => {
      if (result) {
        this.setState({
          email: "",
          username: "",
          password: ""
        });
      }
    });
  };
  render() {
    return (
      <Form className="signup-form" onSubmit={this.handleSubmit} noValidate>
        <h1>
          <span className="font-weight-bold">G.X Platform</span>.com
        </h1>
        <h2 className="text-center">Create Account</h2>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            noValidate
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            noValidate
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            noValidate
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Sign up</Button>
      </Form>
    );
  }
}

Signup.propTypes = {
  onRegister: PropTypes.func
};

Signup.defaultProps = {
  onRegister: (id, pw) => {
    console.log("register function is not defined");
  }
};

export default Signup;
