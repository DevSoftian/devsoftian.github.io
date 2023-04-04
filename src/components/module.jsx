import React, { Component } from "react";

//Module component used in Topotracker dashboard

class Module extends Component {
   //Maps each value in the "entry" object to a data cell up to an optional limit (numElements), and returns as an array of elements.
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

      return (
         //Maps column titles from the "module" object and column data from the "service" object.
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
