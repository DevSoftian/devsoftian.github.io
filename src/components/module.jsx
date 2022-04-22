import React, { Component } from "react";
import bootstrap from "bootstrap";

class Module extends Component {
  state = {};
  render() {
    let module = Object.values(this.props.module);
    console.log(this.props.service);

    return (
      //Attempting to factor out the functionality for a module (games, movies, etc.) from Dashboard
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              {module.map((module) => (
                <th scope="col">{module}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.service.map((entry) => (
              <tr>
                <th scope="row">Game</th>
                {}
                <td>{Object.values(entry)[1]}</td>
                <td>{Object.values(entry)[2]}</td>
                <td>{Object.values(entry)[3]}</td>
                <td>{Object.values(entry)[4]}</td>
                <td>{Object.values(entry)[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Module;
