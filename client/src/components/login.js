import React, { Component } from "react";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  GoogleLoginButton,
  FacebookLoginButton
} from "react-social-login-buttons";

class Login extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">G.X Platform</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Log in</Button>
        <div className="text-center pt-3">Or continue your social accout</div>
        <GoogleLoginButton className="mt-3 mb-3" />
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    );
  }
}

export default Login;