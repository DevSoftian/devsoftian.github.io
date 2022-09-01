import React, { Component } from "react";
import Navbar from "./navbar";
import { bootstrap } from "bootstrap";
import Input from "./input";
import * as userService from "../services/userService";
import jwt_decode from "jwt-decode";

class LoginForm extends Component {
   state = {
      account: { email: "", password: "", username: "" },
      labels: { email: "Email", password: "Password", username: "Username" },
   };

   //Handles form submission.
   handleSubmit = async (e) => {
      e.preventDefault(); //Prevents default behavior (submitting and reloading the whole page).
      const response = await userService.loginUser(this.state.account);
      localStorage.setItem("token", response.data); //Stores token in local storage
      const decodedJWT = this.decodeJWT(localStorage.token);
      // Resets fields.
      const account = { password: "", username: "" };
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

   decodeJWT(token) {
      const decoded = jwt_decode(token);
      console.log("Decoded JWT", decoded);
      return decoded;
   }

   render() {
      const { account, labels } = this.state;
      // const { labels } = this.state;

      return (
         <div className="text-center">
            {/* Navbar */}
            <Navbar />
            {/* Login box */}
            <div className="container">
               <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                     <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                           <h5 className="card-title text-center mb-5 fw-light fs-5">
                              Sign In Or
                              <br />
                              <br />
                              <a
                                 className="signupLink"
                                 href="/devsoftian.github.io/signup"
                              >
                                 Sign Up
                              </a>
                           </h5>

                           <form onSubmit={this.handleSubmit}>
                              {/* Name input */}
                              <Input
                                 name="username"
                                 label={labels.username}
                                 formType="text"
                                 value={account.username}
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
