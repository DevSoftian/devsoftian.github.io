import React, { Component, Fragment } from "react";
import bootstrap from "bootstrap";
import { getGames } from "../services/gameService";
import { getMovies } from "../services/movieService";
import { getProjects } from "../services/projectService";
import { getServices } from "../services/serviceKeys";
import Module from "./module";
import Testable from "./testable";
class Dashboard extends Component {
  state = {
    games: getGames(),
    movies: getMovies(),
    projects: getProjects(),
    services: getServices(),
  };

  render() {
    console.log("Hello?");
    let moduleNumber = 0;
    return (
      <Testable></Testable>
      // <div>

      //   <Module
      //     class="md"
      //     service={this.state.games}
      //     module={this.state.services[moduleNumber]}
      //   ></Module>
      //   <table class="table">
      //     <thead>
      //       <tr>
      //         {/* <th scope="col">Tracks</th> */}
      //         <th scope="col">Games</th>
      //         <th scope="col">Movies</th>
      //         <th scope="col">Projects</th>
      //         <th scope="col">Languages</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <th scope="row">2</th>
      //         <td>Jacob</td>
      //         <td>Thornton</td>
      //         <td>@fat</td>
      //       </tr>
      //       <tr>
      //         <th scope="row">3</th>
      //         <td colSpan="2">Larry the Bird</td>
      //         <td>@twitter</td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
    );
  }
}

export default Dashboard;
