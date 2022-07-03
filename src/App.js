import logo from "./logo.svg";
import React, { Component } from "react";
import { getGames } from "../src/services/games";
import { getMovies } from "../src/services/movies";
import { getProjects } from "../src/services/projects";
import { getServices } from "../src/services/serviceKeys";
import "./App.css";
import Dashboard from "./components/dashboard";
import bootstrap from "bootstrap";
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
    //   .post("http://141.136.42.108:15868/api/courses", {
    //     name: "Charlie",
    //   })
    //   .then((res) => {
    //     console.log(`Status: ${res.status}`);
    //     console.log("Body: ", res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // axios.put("http://141.136.42.108:15868/api/courses/1", {
    //   name: "James",
    // });

    const { data: posts } = await axios.get(
      "http://141.136.42.108:15868/api/courses/"
    );
    console.log(posts);

    // const res = await axios.delete("http://141.136.42.108:15868/api/courses/1");
    // console.log(res);

    // const second = await axios.get("http://141.136.42.108:15868/api/courses/");

    // console.log(second);
  }

  render() {
    return (
      <React.Fragment>
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
