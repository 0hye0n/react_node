import React, { Component } from "react";
import { Authentication } from "../components";
import { connect } from "react-redux";
import { registerRequest } from "../actions/authentication";

class Register extends Component {
  handleRegister = (email, password, username) => {
    return this.props.registerRequest(email, password, username).then(() => {
      if (this.props.status === "SUCCESS") {
        window.alert("Success! Please log in.");
        this.props.history.push("/login");
        return true;
      } else {
        /*
                        ERROR CODES:
                            1: BAD USERNAME
                            2: BAD PASSWORD
                            3: USERNAME EXISTS
                    */
        let errorMessage = [
          "Invalid Email",
          "Password is too short",
          "Email already exists"
        ];

        window.alert(errorMessage[this.props.errorCode - 1]);

        return false;
      }
    });
  };

  render() {
    return (
      <div>
        <Authentication mode={false} onRegister={this.handleRegister} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.authentication.register.status,
    errorCode: state.authentication.register.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: (email, password, username) => {
      return dispatch(registerRequest(email, password, username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
