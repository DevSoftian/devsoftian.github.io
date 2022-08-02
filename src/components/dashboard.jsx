import React, { Component, Fragment } from "react";
import bootstrap from "bootstrap";
import Module from "./module";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
class Dashboard extends Component {
  render() {
    let moduleNumber = 0; //PLaceholder modulenumber

    return (
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Module 1 */}
        <Module
          className="md"
          service={this.props.games}
          module={this.props.services[moduleNumber]}
        ></Module>

        {/*  Module 2 */}
        <Module
          className="md"
          service={this.props.movies}
          module={this.props.services[moduleNumber + 1]}
        ></Module>

        {/*  Module 3 */}
        <Module
          className="md"
          service={this.props.projects}
          module={this.props.services[moduleNumber + 2]}
        ></Module>
      </div>
    );
  }
}

export default Dashboard;
