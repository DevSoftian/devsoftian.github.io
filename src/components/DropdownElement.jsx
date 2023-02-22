import { each } from "jquery";
import React, { Component } from "react";

class DropdownElement extends Component {
   state = {};

   handleDropdownItems = (items) => {
      console.log("items", items);
      let itemCells = [];
      for (let item of items)
         itemCells.push(
            <li>
               <a class="dropdown-item" href="#">
                  {item}
               </a>
            </li>
         );
      return itemCells;
   };

   render() {
      console.log("Dropdown props", this.props);
      return (
         <React.Fragment>
            <div class="dropdown">
               <button
                  class="btndropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  disabled="disabled"
               >
                  {this.props.value}
               </button>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {this.handleDropdownItems(this.props.itemList)}
                  {/* <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
               </ul>
            </div>
         </React.Fragment>
      );
   }
}

export default DropdownElement;
