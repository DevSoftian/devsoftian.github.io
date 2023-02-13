import React, { Component } from "react";
import "./updateModal.css";
import StoreAccess from "./StoreAccess";
import { connect } from "react-redux";
import { selectbug } from "./redux/bugs";
import counter from "./redux/bugs";

class UpdateBug extends Component {
   state = {
      bugStruct: {
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
      bugedit: {
         bugname: "",
         program_id: "",
         bugdesc: "",
         bugfixed: "",
         stepstaken: "",
         bugsolution: "",
         bugstart: "",
         bugend: "",
         bugresources: "",
      },
   };

   onChangeInput = ({ currentTarget: input }) => {
      console.log("input", input);
      console.log(this.props.passedbug);
      // const bugLog = { ...this.state.bugLog };
      // const labels = { ...this.state.labels };
      // labels[input.name] = "";
      // bugLog[input.name] = input.value;
      // this.setState({ bugLog, labels });
   };

   mapBug = (bugStruct) => {
      let cells = [];
      for (let index = 0; index < Object.keys(bugStruct).length; index++) {
         let bugElement = bugStruct[index];
         cells.push(
            <div className="clickableBox" onClick={this.handleEdit}>
               <div className="titleist">{bugElement.title}</div>
               <div className="input-group flex-wrap">
                  {bugElement.size == "lg" ? (
                     <textarea
                        type="text-break"
                        contentEditable="true"
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
                        contentEditable="true"
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
      const { bugStruct, bugedit } = this.state;
      console.log("bugedit on creation", this.props);
      return (
         <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            bug_id="0"
         >
            <div className="modal-dialog modal-lg">
               <div className="modal-content">
                  {/*Modal Header*/}
                  <div className="modal-header">
                     <h5 className="bugheader" id="exampleModalLabel">
                        Update Bug ID: {this.props.selectedBug}
                     </h5>
                     <h5 className="bug_id"></h5>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <StoreAccess bug_id="0"></StoreAccess>
                  {/*Modal Body*/}
                  <div className="modal-body">
                     <div className="container-fluid">
                        {this.mapBug(bugStruct)}
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

const mapStateToProps = (state) => ({
   selectedBug: state.counter.selectedBugNumber,
});

export default connect(mapStateToProps)(UpdateBug);
