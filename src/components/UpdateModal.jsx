import React, { Component } from "react";
import "./updateModal.css";

class UpdateBug extends Component {
   state = {
      bugObject: {
         0: {
            moniker: "bugname",
            title: "Bug Name",
            contents: "",
            size: "sm",
         },
         1: {
            moniker: "program_id",
            title: "Program",
            contents: "",
            size: "sm",
         },
         2: {
            moniker: "bugdesc",
            title: "Description",
            contents: "",
            size: "lg",
         },
         3: {
            moniker: "bugfixed",
            title: "Status",
            contents: "",
            size: "sm",
         },
         4: {
            moniker: "stepstaken",
            title: "Steps Taken",
            contents: "",
            size: "lg",
         },
         5: {
            moniker: "bugsolution",
            title: "Solution",
            contents: "",
            size: "lg",
         },
         6: {
            moniker: "bugstart",
            title: "Start",
            contents: "",
            size: "sm",
         },
         7: {
            moniker: "bugend",
            title: "End",
            contents: "",
            size: "sm",
         },
         8: {
            moniker: "bugresources",
            title: "Resources",
            contents: "",
            size: "lg",
         },
      },
      bugEdit: {},
   };

   // setBugEdit = (bug) => {
   //    let bugEdit = bug;
   //    this.setState({ bugEdit });
   //    console.log("bugEdit after setState", this.state.bugEdit);
   // };

   handleEdit = (currentTarget) => {
      console.log("current target", currentTarget.target);
      console.log(this.props.bugEdit);
   };

   onChangeInput = ({ currentTarget: input }) => {
      console.log("input", input);
      // const bugLog = { ...this.state.bugLog };
      // const labels = { ...this.state.labels };
      // labels[input.name] = "";
      // bugLog[input.name] = input.value;
      // this.setState({ bugLog, labels });
   };

   mapBug = (bugObject) => {
      let cells = [];
      for (let index = 0; index < Object.keys(bugObject).length; index++) {
         let bugElement = bugObject[index];
         cells.push(
            <div className="clickableBox" onClick={this.handleEdit}>
               <div className="titleist">{bugElement.title}</div>
               <div className="input-group flex-wrap">
                  {bugElement.size == "lg" ? (
                     <textarea
                        type="text-break"
                        className="form-control"
                        moniker={bugElement.moniker}
                        value={bugElement.contents}
                        onChange={this.onChangeInput}
                        aria-label="Bug Description"
                        aria-describedby="addon-wrapping"
                     />
                  ) : (
                     <input
                        type="text-break"
                        className="form-control"
                        moniker={bugElement.moniker}
                        value={bugElement.contents}
                        onChange={this.onChangeInput}
                        aria-label="Bug Description"
                        aria-describedby="addon-wrapping"
                     />
                  )}
               </div>
            </div>
         );
      }
      return cells;
   };

   render() {
      const { bugObject } = this.state;
      const bug = {};
      console.log("bugEdit on creation", this.props.bugedit);
      return (
         <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div className="modal-dialog modal-lg">
               <div className="modal-content">
                  {/*Modal Header*/}
                  <div className="modal-header">
                     <h5 className="bugheader" id="exampleModalLabel">
                        Update Bug ID:
                     </h5>
                     <h5 className="bug_id"></h5>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  {/*Modal Body*/}
                  <div className="modal-body">
                     <div className="container-fluid">
                        {this.mapBug(bugObject)}
                     </div>
                  </div>

                  {/*Modal footer*/}
                  <div className="modal-footer">
                     <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                     >
                        Close
                     </button>
                     <button type="button" className="btn btn-primary">
                        Save changes
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default UpdateBug;
