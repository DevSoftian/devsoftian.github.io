import React, { Component } from "react";
import "./bugModule.css";

class BugModule extends Component {
   handleBug = (entry, elemBreak = 5) => {
      const id = "collapseExample" + entry.bug_id;
      const hashid = "#" + id;
      // + entry.bug_id;
      const cells = [];
      cells.push(
         <>
            <tr>
               <th scope="row"></th>
               {this.mapSubElements(entry, elemBreak)}
               <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={hashid}
                  aria-expanded="false"
                  aria-controls="collapseExample"
               >
                  Details
               </button>
            </tr>
            <tr className="collapse" id={id}>
               <th scope="row">Bug Details</th>
               {this.mapSubElements(entry, elemBreak, elemBreak)}
            </tr>
         </>
      );

      // cells.push(
      //    <button
      //       className="btn btn-primary"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target={id}
      //       aria-expanded="false"
      //       aria-controls="collapseExample"
      //    ></button>
      // );
      // this.mapSubElements(entry);
      return cells;
   };

   mapSubElements = (entry, numElements = 4, startKey = 0) => {
      console.log(startKey);
      let cells = [];
      let i = 0;
      for (let key in entry) {
         if (i < startKey) {
            delete entry.key;
            i++;
            console.log(i);
         } else if (key != "_id" && cells.length < startKey + numElements)
            cells.push(<td>{entry[key]}</td>);
      }

      return cells;
   };

   render() {
      let module = Object.values(this.props.module);
      let service = this.props.service;
      return (
         //Maps column titles from the "module" object and column data from the "service" object.
         <div className="container-fluid">
            <table className="table">
               <thead>
                  <tr>
                     <th className="col-1"></th>
                     <th className="col-1"></th>
                     <th className="col-4"></th>
                     <th className="col-2"></th>
                     <th className="col-1"></th>
                     <th className="col-2"></th>
                     <th className="col-1"></th>
                  </tr>
                  <tr>
                     {module.map((moduleTitle) => (
                        <th scope="col">{moduleTitle}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>{service.map((entry) => this.handleBug(entry))}</tbody>
            </table>
         </div>
      );
   }
}

export default BugModule;
