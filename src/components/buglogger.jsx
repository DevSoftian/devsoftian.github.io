import React, { Component } from "react";
import bootstrap from "bootstrap";

class Buglogger extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Buglogger;
