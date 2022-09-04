import React, { Component } from "react";
import Navbar from "./Navbar";
import Module from "./Module";
import { getGames } from "../services/games";
import { getServices } from "../services/serviceKeys";
import config from "../config.json";
import CRUD from "./CRUD";
import MinInput from "./MinInput";
import "./bugSleuth.css";

class BugSleuth extends Component {
   state = {
      account: { program: "", bugName: "", bugDesc: "" },
      labels: {
         program: "Program",
         bugName: "Bug Name",
         bugDesc: "Bug Description",
      },
      bugService: getGames(),
      bugs: getServices()[0],
   };

   //Handles form submission.
   handleSubmit = async (e) => {
      e.preventDefault(); //Prevents default behavior (submitting and reloading the whole page).
      console.log("response");

      // Resets fields.
      const account = { program: "", bugName: "", bugDesc: "" };
      const labels = {
         program: "Program",
         bugName: "Bug Name",
         bugDesc: "Bug Description",
      };
      this.setState({ account, labels });
   };

   //Handles input changes by updating the state and removes labels once a value is entered into the a field.
   handleChange = ({ currentTarget: input }) => {
      const account = { ...this.state.account };
      const labels = { ...this.state.labels };
      labels[input.name] = "";
      account[input.name] = input.value;
      this.setState({ account, labels });
   };

   async componentDidMount() {
      //Gets bug module (information titles) and service (actual bug information).
      const tokenHeader = {
         headers: {
            "x-auth-token": localStorage.token,
         },
      };
      const bugs = await CRUD.read(tokenHeader, config.apiEndpoint + "bugs/");
      this.setState({ bugs });

      const bugService = await CRUD.read(
         tokenHeader,
         config.apiEndpoint + "bugs/service/"
      );
      this.setState({ bugService });

      const createBug = {
         key1: "Hey",
         key2: "You",
      };

      const createResponse = CRUD.create(
         tokenHeader,
         createBug,
         config.apiEndpoint + "bugs/createbug"
      );
   }

   render() {
      const { account, labels } = this.state;
      return (
         <div>
            <Navbar />
            <p>
               <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
               >
                  Create New Bug
               </button>
            </p>
            <div class="collapse" id="collapseExample">
               <div class="card">
                  <div class="card-body">
                     <form onSubmit={this.handleSubmit}>
                        <MinInput
                           className="shortInput"
                           name="program"
                           label={labels.program}
                           formType="text"
                           value={account.program}
                           onChange={this.handleChange}
                        />
                        <MinInput
                           className="shortInput"
                           name="bugName"
                           label={labels.bugName}
                           formType="text"
                           value={account.bugName}
                           onChange={this.handleChange}
                        />
                        <div className="bugDesc">
                           <textarea
                              className="form-control"
                              name="bugDesc"
                              aria-label="With textarea"
                              placeholder={labels.bugDesc}
                              value={account.bugDesc}
                              onChange={this.handleChange}
                           ></textarea>
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
            {/* Bug dashboard */}
            <Module
               className="md"
               module={this.state.bugs}
               service={this.state.bugService}
            ></Module>
         </div>
      );
   }
}

export default BugSleuth;
