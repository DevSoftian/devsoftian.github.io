import React, { Component } from "react";
import Navbar from "./navbar";
import Module from "./module";
import { getGames } from "../services/games";
import { getServices } from "../services/serviceKeys";
import config from "../config.json";
import CRUD from "./CRUD";
import FormPop from "./FormPop";

class BugSleuth extends Component {
   state = {
      bugService: getGames(),
      bugs: getServices()[0],
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
      return (
         <div>
            <Navbar />
            <p>
               <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
               >
                  Create New Bug
               </a>
               {/* <button
                  class="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
               >
                  Button with data-target
               </button> */}
            </p>
            <div class="collapse in" id="collapseExample">
               <FormPop></FormPop>
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
