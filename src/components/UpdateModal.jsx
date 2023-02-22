import React, { Component } from "react";
import "./updateModal.css";
import { connect } from "react-redux";
import EditableTextSm from "./EditableTextSm";
import EditableTextLg from "./EditableTextLg";
import DateTimeElement from "./DateTimeElement";
import DropdownElement from "./DropdownElement";

class UpdateModal extends Component {
   state = {
      bugStruct: {
         0: {
            moniker: "bugname",
            title: "Bug Name",
            contents: "",
            bugElementType: "sm",
            lines: 1,
         },
         1: {
            moniker: "program_id",
            title: "Program",
            contents: "",
            bugElementType: "program-dropdown",
            lines: 1,
         },
         2: {
            moniker: "bugdesc",
            title: "Description",
            contents: "",
            bugElementType: "lg",
            lines: 5,
         },
         3: {
            moniker: "bugfixed",
            title: "Status",
            contents: "",
            bugElementType: "bugfixed-dropdown",
            lines: 1,
         },
         4: {
            moniker: "stepstaken",
            title: "Steps Taken",
            contents: "",
            bugElementType: "lg",
            lines: 3,
         },
         5: {
            moniker: "bugsolution",
            title: "Solution",
            contents: "",
            bugElementType: "lg",
            lines: 3,
         },
         6: {
            moniker: "bugstart",
            title: "Start",
            contents: "",
            bugElementType: "datetime",
            lines: 1,
         },
         7: {
            moniker: "bugend",
            title: "End",
            contents: "",
            bugElementType: "datetime",
            lines: 1,
         },
         8: {
            moniker: "bugresources",
            title: "Resources",
            contents: "",
            bugElementType: "lg",
            lines: 3,
         },
      },
      bugedit: {
         bugname: "",
         bugdesc: "",
         program_id: "",
         bugfixed: "",
         bugstart: "",
         bugend: "",
         bugresources: "",
         bugsolution: "",
         stepstaken: "",
      },
      programItems: ["Topotracker", "BugSleuth", "BlogApp"],
      bugFixedItems: ["ASSIGNED", "LOGGED", "RESOLVED"],
   };

   onChangeInput = ({ currentTarget: input }) => {
      const bugLog = { ...this.state.bugLog };
      const labels = { ...this.state.labels };
      labels[input.moniker] = "";
      bugLog[input.moniker] = input.value;
      this.setState({ bugLog, labels });
   };

   mapBug = (bugStruct) => {
      let cells = [];
      for (let index = 0; index < Object.keys(bugStruct).length; index++) {
         let bugElement = bugStruct[index];
         cells.push(
            <div className="clickableBox" onClick={this.handleEdit}>
               <div className="titleist">{bugElement.title}</div>
               <div className="input-group flex-wrap">
                  {this.handleBugElement(bugElement)}
               </div>
            </div>
         );
      }
      return cells;
   };

   handleBugElement(bugElement) {
      if (bugElement.bugElementType == "lg")
         return (
            <EditableTextLg
               moniker={bugElement.moniker}
               value={this.props.selectedBug[bugElement.moniker]}
               lines={bugElement.lines}
            ></EditableTextLg>
         );
      else if (bugElement.bugElementType == "sm")
         return (
            <EditableTextSm
               moniker={bugElement.moniker}
               value={this.props.selectedBug[bugElement.moniker]}
            ></EditableTextSm>
         );
      else if (bugElement.bugElementType == "datetime")
         return (
            <DateTimeElement
               moniker={bugElement.moniker}
               value={this.props.selectedBug[bugElement.moniker]}
            ></DateTimeElement>
         );
      else if (bugElement.bugElementType == "program-dropdown")
         return (
            <DropdownElement
               moniker={bugElement.moniker}
               value={this.props.selectedBug[bugElement.moniker]}
               itemList={this.state.programItems}
            ></DropdownElement>
         );
      else if (bugElement.bugElementType == "bugfixed-dropdown")
         return (
            <DropdownElement
               moniker={bugElement.moniker}
               value={this.props.selectedBug[bugElement.moniker]}
               itemList={this.state.bugFixedItems}
            ></DropdownElement>
         );
   }

   render() {
      const { bugStruct, bugedit, selectedBug } = this.state;
      return (
         <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            bug_id="0"
         >
            <div className="modal-dialog modal-lg">
               <div className="modal-content">
                  {/*Modal Header*/}
                  <div className="modal-header">
                     <h3 className="bugheader" id="exampleModalLabel">
                        Bug ID: {this.props.selectedBug.bug_id}
                     </h3>
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
   selectedBug: state.counter.selectedBug,
});

export default connect(mapStateToProps)(UpdateModal);
