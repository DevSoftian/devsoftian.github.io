import React, { Component } from "react";
import Navbar from "./Navbar";
import Module from "./Module";
import { getGames } from "../services/games";
import { getServices } from "../services/serviceKeys";
import config from "../config.json";
import CRUD from "./CRUD";
import MinInput from "./MinInput";
import "./bugSleuth.css";
import BugModule from "./BugModule";
import StoreAccess from "./StoreAccess";

/* BugSleuth dashboard page

         Dashboard component with Create New Bug button (expandable) and BugModule component for displaying bug data. */

class BugSleuth extends Component {
   state = {
      bugLog: { program: "", bugName: "", bugDesc: "" },
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

      const tokenHeader = {
         headers: {
            "x-auth-token": localStorage.token,
         },
      };

      // console.log(this.state.bugLog);

      const createResponse = CRUD.create(
         tokenHeader,
         this.state.bugLog,
         config.apiEndpoint + "bugs/createbug"
      );
      console.log("createBugForm", createResponse);

      // Resets fields.
      const bugLog = { program: "", bugName: "", bugDesc: "" };
      const labels = {
         program: "Program",
         bugName: "Bug Name",
         bugDesc: "Bug Description",
      };
      this.setState({ bugLog, labels });
   };

   //Handles input changes by updating the state and removes labels once a value is entered into the a field.
   handleChange = ({ currentTarget: input }) => {
      const bugLog = { ...this.state.bugLog };
      const labels = { ...this.state.labels };
      labels[input.name] = "";
      bugLog[input.name] = input.value;
      this.setState({ bugLog, labels });
   };

   handleSelect = (e) => {
      console.log("handleSelect Triggered", e);
      // const bugLog = { ...this.state.bugLog };
      // const labels = { ...this.state.labels };
      // labels[input.name] = "";
      // bugLog[input.name] = input.value;
      // this.setState({ bugLog, labels });
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
   }

   render() {
      const { bugLog, labels } = this.state;
      // console.log("Bugsleuth bugs", this.state.bugs);
      return (
         <div className="mainPage">
            <Navbar />
            <p>
               <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
               >
                  Create New Bug
               </button>
               {/* <StoreAccess bugs={this.state.bugs}></StoreAccess> */}
            </p>
            <div className="collapse" id="collapseExample">
               <div className="card">
                  <div className="card-body">
                     <form onSubmit={this.handleSubmit} autoComplete="off">
                        {/* <select
                           class="form-select"
                           name="program"
                           aria-label="Default select example"
                           label={labels.program}
                           onSelect={this.handleSelect}
                        >
                           <option selected>Program</option>
                           <option value="1">BugSleuth</option>
                           <option value="2">Topotracker</option>
                           <option value="3">Other</option>
                        </select> */}
                        <MinInput
                           className="shortInput"
                           name="program"
                           label={labels.program}
                           formType="text"
                           value={bugLog.program}
                           onChange={this.handleChange}
                        />
                        <MinInput
                           className="shortInput"
                           name="bugName"
                           label={labels.bugName}
                           formType="text"
                           value={bugLog.bugName}
                           onChange={this.handleChange}
                        />
                        <div className="bugDesc">
                           <textarea
                              className="form-control"
                              name="bugDesc"
                              aria-label="With textarea"
                              placeholder={labels.bugDesc}
                              value={bugLog.bugDesc}
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
            <BugModule
               className="md"
               module={this.state.bugs}
               service={this.state.bugService}
            ></BugModule>
         </div>
      );
   }
}

export default BugSleuth;
