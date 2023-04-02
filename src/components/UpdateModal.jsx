import React, { Component } from "react";
import "./updateModal.css";
import { connect } from "react-redux";
import "react-edit-text/dist/index.css";
import EditableTextSm from "./EditableTextSm";
import EditableTextLg from "./EditableTextLg";
import DateTimeElement from "./DateTimeElement";
import DropdownElement from "./DropdownElement";
import CRUD from "./CRUD";
import config from "../config.json";
import jwt_decode from "jwt-decode";

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
      bugEdit: {
         bug_id: "",
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
      programItems: ["Topotracker", "BugSleuth", "Blog App"],
      bugFixedItems: ["ASSIGNED", "LOGGED", "RESOLVED"],
   };

   mapBug = (bugStruct, role) => {
      let cells = [];
      for (let index = 0; index < Object.keys(bugStruct).length; index++) {
         let bugElement = bugStruct[index];
         cells.push(
            <div className="clickableBox" onClick={this.handleEdit}>
               <div className="titleist">{bugElement.title}</div>
               <div className="input-group flex-wrap">
                  {this.handleBugElement(bugElement, role)}
               </div>
            </div>
         );
      }
      return cells;
   };

   handleSave = ({ name, value, previousValue }) => {
      const { bugEdit } = this.state;
      console.log("name", name);
      console.log("value", value);
      console.log("previousValue", previousValue, this);
      bugEdit[name] = value;
      console.log("bugEdit after change", bugEdit);
   };

   handleSaveChanges = async (e) => {
      e.preventDefault();

      const tokenHeader = {
         headers: {
            "x-auth-token": localStorage.token,
         },
      };

      const updateResponse = CRUD.update(
         tokenHeader,
         this.state.bugEdit,
         config.apiEndpoint + "bugs/updatebug"
      );
      console.log("Bug Update Report", updateResponse);

      this.state.bugEdit.bugend =
         document.getElementById("bugend-element").value;
      this.state.bugEdit.bugstart =
         document.getElementById("bugstart-element").value;
      this.state.bugEdit.bugfixed =
         document.getElementById("bugfixed-element").value;
      this.state.bugEdit.program_id =
         document.getElementById("program_id-element").value;

      console.log("savedChangesBugEdit", this.state.bugEdit);
   };

   handleBugElement(bugElement, role) {
      if (role === "Admin") {
         console.log("Current role is", role);
         return this.adminModal(bugElement);
      }
   }

   adminModal(bugElement) {
      switch (bugElement.bugElementType) {
         case "lg":
            return (
               <EditableTextLg
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></EditableTextLg>
            );
         case "sm":
            return (
               <EditableTextSm
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></EditableTextSm>
            );
         case "datetime":
            return (
               <DateTimeElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></DateTimeElement>
            );
         case "program-dropdown":
            return (
               <DropdownElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
                  itemList={this.state.programItems}
               ></DropdownElement>
            );
         case "bugfixed-dropdown":
            return (
               <DropdownElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
                  itemList={this.state.bugFixedItems}
               ></DropdownElement>
            );
      }
   }

   managerModal(bugElement) {
      switch (bugElement.bugElementType) {
         case "lg":
            return (
               <EditableTextLg
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></EditableTextLg>
            );
         case "sm":
            return (
               <EditableTextSm
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></EditableTextSm>
            );
         case "datetime":
            return (
               <DateTimeElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></DateTimeElement>
            );
         case "program-dropdown":
            return (
               <DropdownElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
                  itemList={this.state.programItems}
               ></DropdownElement>
            );
         case "bugfixed-dropdown":
            return (
               <DropdownElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
                  itemList={this.state.bugFixedItems}
               ></DropdownElement>
            );
      }
   }

   userModal(bugElement) {
      switch (bugElement.bugElementType) {
         case "lg":
            return (
               <EditableTextLg
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></EditableTextLg>
            );
         case "sm":
            return (
               <EditableTextSm
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></EditableTextSm>
            );
         case "datetime":
            return (
               <DateTimeElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
               ></DateTimeElement>
            );
         case "program-dropdown":
            return (
               <DropdownElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
                  itemList={this.state.programItems}
               ></DropdownElement>
            );
         case "bugfixed-dropdown":
            return (
               <DropdownElement
                  bugElement={bugElement}
                  value={this.props.selectedBug[bugElement.moniker]}
                  itemList={this.state.bugFixedItems}
               ></DropdownElement>
            );
      }
   }

   render() {
      const { bugStruct, bugEdit } = this.state;
      const selectedBug = this.props.selectedBug;
      const role = jwt_decode(localStorage.token).role;

      for (let key of Object.keys(bugEdit)) {
         bugEdit[key] = selectedBug[key];
      }
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
                        {this.mapBug(bugStruct, role)}
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
                     <button
                        type="button"
                        onClick={this.handleSaveChanges}
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        // data-bs-dismiss="modal" This closes the Modal
                     >
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
