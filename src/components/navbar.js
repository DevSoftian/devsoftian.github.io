import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      //Navbar Declaration
      <React.StrictMode>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Topolify
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Navbar buttons */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/devsoftian.github.io/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/devsoftian.github.io/topolify/">
                  Topotracker
                  {/* <span class="sr-only">(current)</span> This is a text indicating that this is the current location. */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/devsoftian.github.io/buglogger/">
                  BugSleuth
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.StrictMode>
    );
  }
}

export default Navbar;
