import React, { Component } from "react";
import Navbar from "./navbar";
import { bootstrap } from "bootstrap";

// username = React.createRef();
// password = React.createRef();

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  //Handles form submission.
  handleSubmit = (e) => {
    e.preventDefault(); //Prevents default behavior (submitting and reloading the whole page).

    console.log("Submitted");
  };

  //Handles input changes by updating the state.
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div class="text-center">
        <Navbar />
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          {/* Username input */}
          <div class="form-group col-3 mx-auto">
            <label htmlFor="usernameInput">Username</label>
            <input
              value={account.username}
              name="username"
              onChange={this.handleChange}
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

          {/* Password input */}
          <div class="form-group col-3 mx-auto">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={account.password}
              name="password"
              onChange={this.handleChange}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          {/* Check Box */}
          <div class="form-check col-1 mx-auto">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          {/* Submit button */}
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
