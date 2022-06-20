import React, { Component } from "react";
import bootstrap from "bootstrap";
import Navbar from "./navbar";

class Buglogger extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              User
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                Pass
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Pass"
              aria-label="Pass"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Buglogger;
