import React, { Component } from "react";
import bootstrap from "bootstrap";
import Navbar from "./navbar";
import Module from "./module";
import axios from "axios";
import { getGames } from "../services/games";
import { getServices } from "../services/serviceKeys";
import config from "../config.json";

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
      const { data: bugs } = await axios.get(
         "http://141.136.42.108:15868/bugs/",
         tokenHeader
      );
      this.setState({ bugs });

      const { data: bugService } = await axios.get(
         "http://141.136.42.108:15868/bugs/service/",
         tokenHeader
      );
      this.setState({ bugService });

      const response = await axios.post(
         config.apiEndpoint + "bugs/createbug",
         {
            key1: "Hey",
            key2: "You",
         },
         tokenHeader
      );
   }

   render() {
      // console.log("bugs" + Object.values(this.state.bugs));

      return (
         <div>
            <Navbar />

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
