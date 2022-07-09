import React, { Component } from "react";
import bootstrap from "bootstrap";
import Navbar from "./navbar";
import Module from "./module";
import axios from "axios";
import { getGames } from "../services/games";
import { getServices } from "../services/serviceKeys";

class BugSleuth extends Component {
  state = {
    bugService: getGames(),
    bugs: getServices()[0],
  };

  //These are flipped. Fix later.
  async componentDidMount() {
    const { data: bugs } = await axios.get(
      "http://141.136.42.108:15868/api/bugsleuth/bugs/"
    );
    this.setState({ bugs });

    const { data: bugService } = await axios.get(
      "http://141.136.42.108:15868/api/bugsleuth/bugservice/"
    );
    this.setState({ bugService });
  }

  render() {
    // console.log("bugs" + Object.values(this.state.bugs));

    return (
      <div>
        <Navbar />

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              User
            </span>
          </div>
          <input
            type="text"
            id="typetext"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Pass
              </span>
            </div>
            <input
              type="password"
              id="typePassword"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
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
