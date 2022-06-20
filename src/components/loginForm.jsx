import React, { Component } from "react";
import Navbar from "./navbar";
import { bootstrap } from "bootstrap";

class LoginForm extends Component {
  render() {
    return (
      <div class="text-center">
        <Navbar />
        <h3>Login</h3>
        <form>
          <div class="form-group col-3 mx-auto">
            <label for="usernameInput">Username</label>
            <input
              type="text"
              class="form-control"
              id="usernameInput"
              aria-describedby="usernameHelp"
              placeholder="Enter Username"
            />
            <small id="usernameHelp" class="form-text text-muted">
              Please enter your username
            </small>
          </div>
          <div class="form-group col-3 mx-auto">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check col-1 mx-auto">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
