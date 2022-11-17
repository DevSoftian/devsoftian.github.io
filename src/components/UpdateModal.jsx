import React, { Component } from "react";
import "./updateModal.css";

class UpdateBug extends Component {
   state = {};

   handleEdit = (currentTarget) => {
      console.log("current target", currentTarget);
   };

   render() {
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
                        <div className="clickableBox">
                           <div className="titleist">Bug Name</div>
                           <div className="bugname"></div>
                        </div>

                        <div className="clickableBox" onClick={this.handleEdit}>
                           <div className="titleist">Description</div>
                           <div className="bugdesc"></div>
                        </div>

                        <div className="clickableBox">
                           <div className="titleist">Status</div>
                           <div className="bugfixed"></div>
                        </div>

                        <div className="clickableBox">
                           <div className="titleist">Start</div>
                           <div className="bugstart"></div>
                        </div>

                        <div className="clickableBox">
                           <div className="titleist">End</div>
                           <div className="bugend"></div>
                        </div>

                        <div className="clickableBox">
                           <div className="titleist">Resources</div>
                           <div className="bugresources"></div>
                        </div>
                        <div className="clickableBox">
                           <div className="titleist">Solution</div>
                           <div className="bugsolution"></div>
                        </div>
                        <div className="clickableBox">
                           <div className="titleist">Program</div>
                           <div className="program_id"></div>
                        </div>
                        <div className="clickableBox">
                           <div className="titleist">Steps Taken</div>
                           <div className="stepstaken"></div>
                        </div>
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
