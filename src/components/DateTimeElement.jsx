import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function DateTimeElement(props) {
   let newStringy = "";
   if (props.value != null) {
      let stringy = new String(props.value);
      let decimal = stringy.indexOf(".");
      newStringy = stringy.slice(0, decimal);
   } else newStringy = props.value;
   return (
      <React.Fragment>
         <input
            name="date-time-element"
            defaultValue={newStringy}
            id="startDate"
            class="form-control"
            type="datetime-local"
         />
      </React.Fragment>
   );
}
