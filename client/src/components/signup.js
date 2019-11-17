import React, { Component } from "react";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends Component {
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

export default Signup;
