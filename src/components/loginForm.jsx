import React, { Component } from "react";
import Navbar from "./navbar";
import { bootstrap } from "bootstrap";
import Input from "./input";

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
          <Input
            name="username"
            label="Username"
            formType="text"
            value={account.username}
            onChange={this.handleChange}
          />

          {/* Password input */}
          <Input
            name="password"
            label="Password"
            formType="password"
            value={account.username}
            onChange={this.handleChange}
          />

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
