import React, { Component } from "react";
import Navbar from "./navbar";
import { bootstrap } from "bootstrap";
import Input from "./input";
import * as userService from "../services/userService";

// username = React.createRef();
// password = React.createRef();

class LoginForm extends Component {
  state = {
    account: { username: "", password: "", name: "" },
  };

  //Handles form submission.
  handleSubmit = async (e) => {
    await userService.registerUser(this.state.account); // e.preventDefault(); //Prevents default behavior (submitting and reloading the whole page).

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
      <div className="text-center">
        <Navbar />
        {/* Login box */}
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </h5>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      {/* Username input */}
                      <Input
                        name="username"
                        label="Email"
                        formType="text"
                        value={account.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    {/* Password input */}
                    <Input
                      name="name"
                      label="Name"
                      formType="text"
                      value={account.name}
                      onChange={this.handleChange}
                    />
                    <Input
                      name="password"
                      label="Password"
                      formType="password"
                      value={account.password}
                      onChange={this.handleChange}
                    />
                    {/* Check Box */}
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    {/* Submit button */}
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="p-3"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
