import React, { Component } from "react";
import "./bugModule.css";
import UpdateModal from "./UpdateModal";
import { useDispatch } from "react-redux";
import { changeBugToBeUpdated } from "./redux/bugs";
import ReduxChangeWrapper from "./ReduxChangeWrapper";
import { connect } from "react-redux";

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
                  onClick={(e) => this.handleModalClick(entry, e)}
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

   handleModalClick = (bug) => {
      console.log("ModalClick Bug", bug);
      var exampleModal = document.getElementById("exampleModal");
      // console.log("bugeditprop", exampleModal);
      // console.log("bugedit Props", exampleModal.children);

      // let bugKeys = Object.keys(bug).filter((element) => element != "bug_id");
      // bugKeys.forEach(function (key) {
      //    let bugPart = "[moniker=" + key + "]";
      //    let textBox = exampleModal.querySelector(bugPart);
      //    textBox.setAttribute("placeholder", bug[key] == null ? "" : bug[key]);
      // });
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
      let bugedit2 = { bugname: "Not ready yet." };

      return (
         //Maps column titles from the "titles" object and column data from the "service" object.
         <div className="container-fluid">
            <UpdateModal bugeditprop={bugedit2}></UpdateModal>
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
