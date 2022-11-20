import React, { Component } from "react";
import "./bugModule.css";
import UpdateModal from "./UpdateModal";

/*Bug data table display component

         Displays bug table data from the server (expandable dropdowns for each bug).*/

class BugModule extends Component {
   state = { isOpen: false };

   //Bug displaying function

   //Called in the body by service.map for each bug to display its data
   handleBug = (entry, elemBreak = 5) => {
      const id = "collapseExample" + entry.bug_id;
      const hashid = "#" + id;
      const cells = [];
      cells.push(
         <>
            <tr>
               {/*Modal Button*/}
               <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  databsentry={entry.bug_id}
                  onClick={(e) => this.handleClick(entry, e)}
               >
                  Open
               </button>
               {this.mapSubElements(entry, elemBreak)}
               {/*Details Button*/}
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
            {/*Second collpsible row elemnts*/}
            <tr className="collapse" id={id}>
               <th scope="row">Bug End</th>
               {this.mapSubElements(entry, elemBreak, elemBreak)}
            </tr>
         </>
      );
      return cells;
   };

   handleClick = (bug, e) => {
      var exampleModal = document.getElementById("exampleModal");
      exampleModal.setAttribute("bugEdit", bug);
      let bugKeys = Object.keys(bug).filter((element) => element != "bug_id");
      bugKeys.forEach(function (key) {
         let bugPart = "[moniker=" + key + "]";
         let textBox = exampleModal.querySelector(bugPart);
         textBox.setAttribute("placeholder", bug[key] == null ? "" : bug[key]);
      });

      // Object.keys(bug).forEach((key) => {

      // });

      // var modalTitle = exampleModal.querySelector(".modal-title");
      // var modalBodyInput = exampleModal.querySelector(".bugdesc");
      // modalTitle.textContent = "Update Bug - " + args.bug_id;
      // modalBodyInput.textContent = args.bugdesc;
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
      let titles = Object.values(this.props.module);
      let service = this.props.service;
      let bugEdit = { bugname: "Not ready yet." };

      return (
         //Maps column titles from the "titles" object and column data from the "service" object.
         <div className="container-fluid">
            <UpdateModal bugEdit={bugEdit}></UpdateModal>
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
                     {titles.slice(0, 7).map((title) => (
                        <th scope="col">{title}</th>
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
