import logo from "./logo.svg";
import React, { Component } from "react";
import { getGames } from "../src/services/games";
import { getMovies } from "../src/services/movies";
import { getProjects } from "../src/services/projects";
import { getServices } from "../src/services/serviceKeys";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "./config.json";
import http from "./services/httpService";
import Dashboard from "./components/dashboard";
import bootstrap, { Toast } from "bootstrap";
import axios from "axios";

class App extends Component {
  state = {
    games: getGames(),
    movies: getMovies(),
    projects: getProjects(),
    services: getServices(),
    posts: [],
  };

  async componentDidMount() {
    // axios
    //   .post(config.apiEndpointapi + "/courses", {
    //     name: "Charlie",
    //   })
    //   .then((res) => {
    //     console.log(`Status: ${res.status}`);
    //     console.log("Body: ", res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // axios.put(config.apiEndpointapi + "/courses/1", {
    //   name: "James",
    // });

    const { data: posts } = await http.get(config.apiEndpoint + "api/courses/");
    console.log(posts);

    // const res = await axios.delete(config.apiEndpointapi + "/courses/1");
    // console.log(res);

    // const second = await axios.get(config.apiEndpointapi + "/courses/");

    // console.log(second);
  }

  render() {
    return (
      <React.Fragment>
        {/* Toast container for potential error message. */}
        <ToastContainer />

        <Dashboard
          movies={this.state.movies}
          games={this.state.games}
          projects={this.state.projects}
          services={this.state.services}
        ></Dashboard>
      </React.Fragment>
    );
  }
}

export default App;
