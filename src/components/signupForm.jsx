import React, { Component } from "react";
import Navbar from "./navbar";
import { bootstrap } from "bootstrap";
import Input from "./input";
import * as userService from "../services/userService";

// username = React.createRef();
// password = React.createRef();

class SignupForm extends Component {
   state = {
      account: { username: "", password: "", name: "" },
      labels: { username: "Email", password: "Password", name: "Name" },
   };

   //Handles form submission.
   handleSubmit = async (e) => {
      e.preventDefault(); //Prevents default behavior (submitting and reloading the whole page).
      const response = await userService.registerUser(this.state.account);
      console.log(response.data);

      // Resets fields.
      const account = { username: "", password: "", name: "" };
      this.setState({ account });
   };

   //Handles input changes by updating the state and removes labels once a value is entered into the a field.
   handleChange = ({ currentTarget: input }) => {
      const account = { ...this.state.account };
      const labels = { ...this.state.labels };
      labels[input.name] = "";
      account[input.name] = input.value;
      this.setState({ account, labels });
   };

   render() {
      const { account, labels } = this.state;
      // const { labels } = this.state;

      return (
         <div className="text-center">
            {/* Navbar */}
            <Navbar />
            {/* Signup box */}
            <div className="container">
               <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                     <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                           <h5 className="card-title text-center mb-5 fw-light fs-5">
                              Sign Up Or <br />
                              <br />
                              <a
                                 className="signupLink"
                                 href="/devsoftian.github.io/"
                              >
                                 Sign In
                              </a>
                           </h5>
                           <form onSubmit={this.handleSubmit}>
                              <div className="form-floating mb-3">
                                 {/* Username input */}
                                 <Input
                                    name="username"
                                    label={labels.username}
                                    formType="text"
                                    value={account.username}
                                    onChange={this.handleChange}
                                 />
                              </div>
                              {/* Name input */}
                              <Input
                                 name="name"
                                 label={labels.name}
                                 formType="text"
                                 value={account.name}
                                 onChange={this.handleChange}
                              />
                              {/* Passphrase input */}
                              <Input
                                 name="password"
                                 label={labels.password}
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
                                    onClick={this.onSubmit}
                                    className="btn btn-primary btn-signup text-uppercase fw-bold"
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

export default SignupForm;
