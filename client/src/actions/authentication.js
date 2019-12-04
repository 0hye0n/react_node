import axios from "axios";
import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE
} from "./ActionTypes";

export function registerRequest(email, username, password) {
  return dispatch => {
    dispatch(register());

    return axios
      .post("http://localhost:9000/register", { email, username, password })
      .then(res => {
        dispatch(registerSuccess());
      })
      .catch(err => {
        dispatch(registerFailure(err.response.data.code));
      });
  };
}

export function register() {
  return {
    type: AUTH_REGISTER
  };
}

export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS
  };
}

export function registerFailure(err) {
  return {
    type: AUTH_REGISTER_FAILURE,
    err
  };
}
