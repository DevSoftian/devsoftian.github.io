import React, { Component } from "react";
import Input from "./input";
import * as userService from "../services/userService";

class FormPop extends Component {
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
      return (
         <form onSubmit={this.handleSubmit}>
            {/* Passphrase input */}
            <Input
               name="password"
               label={labels.password}
               formType="password"
               value={account.password}
               onChange={this.handleChange}
            />
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
      );
   }
}

export default FormPop;
