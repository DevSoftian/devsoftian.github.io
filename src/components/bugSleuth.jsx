import React, { Component } from "react";
import bootstrap from "bootstrap";
import Navbar from "./navbar";
import Module from "./module";
import { getGames } from "../services/games";
import { getServices } from "../services/serviceKeys";
import config from "../config.json";
import CRUD from "./CRUD";

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
      //    "http://141.136.42.108:15868/bugs/",
      //    tokenHeader
      // );
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
            <button>Create New Bug</button>
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
