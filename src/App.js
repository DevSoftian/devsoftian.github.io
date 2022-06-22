import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import bootstrap from "bootstrap";
import axios from "axios";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Dashboard></Dashboard>
      </React.Fragment>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React Hello
      //     </a>
      //   </header>
      // </div>);
    );
  }
}

export default App;

// function App() {
//   return (

//   );
// }

// export default App;
