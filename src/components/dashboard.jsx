import React, { Component, Fragment } from "react";
import bootstrap from "bootstrap";
import { getGames } from "../services/games";
import { getMovies } from "../services/movies";
import { getProjects } from "../services/projects";
import { getServices } from "../services/serviceKeys";
import Module from "./module";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
class Dashboard extends Component {
  state = {
    games: getGames(),
    movies: getMovies(),
    projects: getProjects(),
    services: getServices(),
  };

  render() {
    let moduleNumber = 0; //PLaceholder modulenumber

    return (
      <div>
        <Navbar />

        {/* Module 1 */}
        <Module
          className="md"
          service={this.state.games}
          module={this.state.services[moduleNumber]}
        ></Module>

        {/*  Module 2 */}
        <Module
          className="md"
          service={this.state.movies}
          module={this.state.services[moduleNumber + 1]}
        ></Module>

        {/*  Module 3 */}
        <Module
          className="md"
          service={this.state.projects}
          module={this.state.services[moduleNumber + 2]}
        ></Module>
      </div>
    );
  }
}

export default Dashboard;
