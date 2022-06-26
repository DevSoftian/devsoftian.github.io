import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import bootstrap from "bootstrap";
import axios from "axios";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    axios
      .post("http://141.136.42.108:15868/api/courses", {
        name: "Charlie",
      })
      .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log("Body: ", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log("Charlie sent");
    const { data: posts } = await axios.get("http://141.136.42.108:15868");
    console.log(posts);
  }

  render() {
    return (
      <React.Fragment>
        <Dashboard></Dashboard>
      </React.Fragment>
    );
  }
}

export default App;
