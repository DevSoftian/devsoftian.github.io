import React, { Component } from "react";
import "./bugModule.css";
import { Link } from "react-router-dom";

/*Bug data table display component

         Displays bug table data from the server (expandable dropdowns for each bug).*/

class BugModule extends Component {
   //Bug displaying function

   //Called in the body by service.map for each bug to display its data
   handleBug = (entry, elemBreak = 5) => {
      const id = "collapseExample" + entry.bug_id;
      const hashid = "#" + id;
      // + entry.bug_id;
      const cells = [];
      cells.push(
         <>
            <tr>
               <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
               >
                  Open
               </button>
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
               <th scope="row">Bug End</th>
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
      let cells = [];
      let i = 0;
      for (let key in entry) {
         if (i < startKey) {
            delete entry.key;
            i++;
            // console.log(i);
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
            <div
               class="modal fade"
               id="exampleModal"
               tabindex="-1"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
            >
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                           Modal title
                        </h5>
                        <button
                           type="button"
                           class="btn-close"
                           data-bs-dismiss="modal"
                           aria-label="Close"
                        ></button>
                     </div>
                     <div class="modal-body">...</div>
                     <div class="modal-footer">
                        <button
                           type="button"
                           class="btn btn-secondary"
                           data-bs-dismiss="modal"
                        >
                           Close
                        </button>
                        <button type="button" class="btn btn-primary">
                           Save changes
                        </button>
                     </div>
                  </div>
               </div>
            </div>
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
