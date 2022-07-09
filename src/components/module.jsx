import React, { Component } from "react";
import bootstrap from "bootstrap";

class Module extends Component {
  //Maps each subelement in the module to a data cell up to a limit, and returns as an array of elements.
  mapSubElements = (entry, numElements = 5) => {
    let cells = [];
    for (let key in entry) {
      if (key != "_id" && cells.length <= numElements)
        cells.push(<td>{entry[key]}</td>);
    }
    return cells;
  };

  render() {
    let module = Object.values(this.props.module);
    let service = this.props.service;
    console.log(module);
    console.log(service);

    return (
      //Maps column titles from the module object and entry data from the service object.
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {module.map((moduleTitle) => (
                <th scope="col">{moduleTitle}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {service.map((entry) => (
              <tr>
                <th scope="row"></th>
                {this.mapSubElements(entry)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Module;
