import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import React from "react";
import Dashboard from "./components/dashboard";
import bootstrap from "bootstrap";

function App() {
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
    // </div>
  );
}

export default App;

export const Home = () => {
  return (
    <div>
      <h1>Navigation example</h1>
      <nav>
        <Link to="/devsoftian.github.io/buglogger/">Bugsleuth</Link> |{" "}
        <Link to="/devsoftian.github.io/topolify/">Topolify</Link>
      </nav>
    </div>
  );
};

export const Bugsleuth = () => {
  return (
    <div>
      <h2>Foosleuth</h2>
    </div>
  );
};

export const FooBar = () => {
  return (
    <div>
      <h2>FooBar</h2>
    </div>
  );
};
