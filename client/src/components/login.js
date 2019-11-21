import React, { Component } from "react";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  GoogleLoginButton,
  FacebookLoginButton
} from "react-social-login-buttons";
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.callAPI = this.callAPI.bind(this);
    this.state = {
      email: '',
      password: '',
      err: false,
      res: false
    };
  }
  async callAPI(){
    const instance = axios.create({
      baseURL: "http://15.164.32.128:9000/"
    });

    let data = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });

    const headers = {
      'Content-Type': 'application/json'
    }

   instance.post('/login', data, {
     headers: headers, 
   }).then(res => {
    this.state.res = true;
   }).catch(err => {
    this.state.err = true;
   })

  }
  componentDidMount(){
    console.log(this.state.err);
    console.log(this.state.res);
  }

  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">G.X Platform</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
       <Form onSubmit={this.callAPI}>
            <FormGroup>
              <Label>Email</Label>
              <Input 
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})} 
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input 
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})} 
              />
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block" type="submit">Log in</Button>
          </Form>
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
