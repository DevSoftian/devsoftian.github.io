import React, { Component } from "react";
import "./dropdownElement.css";

class DropdownElement extends Component {
   state = {};

   handleDropdownItems = (items) => {
      let itemCells = [];
      itemCells.push(
         <option value={this.props.value}>{this.props.value}</option>
      );
      for (let item of items) {
         if (item != this.props.value) {
            itemCells.push(<option value={item}> {item}</option>);
         } else {
            console.log("item skipped ", item);
         }
      }
      return itemCells;
   };

   render() {
      const { bugElement } = this.props;
      let newId = bugElement.moniker + "-element";
      return (
         <React.Fragment>
            <div class="dropdown-element">
               <select name={bugElement.moniker} id={newId}>
                  {this.handleDropdownItems(this.props.itemList)}
               </select>
            </div>
         </React.Fragment>
      );
   }
}

export default DropdownElement;
