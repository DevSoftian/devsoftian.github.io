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
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card border-0 shadow rounded-3 my-5">
                <div class="card-body p-4 p-sm-5">
                  <h5 class="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </h5>
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-floating mb-3">
                      {/* Username input */}
                      <Input
                        name="username"
                        label="Username"
                        formType="text"
                        value={account.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    {/* Password input */}
                    <Input
                      name="password"
                      label="Password"
                      formType="password"
                      value={account.password}
                      onChange={this.handleChange}
                    />
                    {/* Check Box */}
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        class="form-check-label"
                        for="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>

                    <div class="d-grid">
                      <button
                        class="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div class="p-3"></div>
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
