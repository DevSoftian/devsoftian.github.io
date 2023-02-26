import React from "react";
import "react-edit-text/dist/index.css";

export default function DateTimeElement(props) {
   let newStringy = "";
   if (props.value != null) {
      let stringy = new String(props.value);
      let decimal = stringy.indexOf(".");
      newStringy = stringy.slice(0, decimal);
   } else newStringy = props.value;

   let newId = props.moniker + "-element";

   return (
      <React.Fragment>
         <input
            name={props.moniker}
            onSave={props.onSave}
            rows={props.lines}
            defaultValue={newStringy}
            id={newId}
            class="form-control"
            type="datetime-local"
         />
      </React.Fragment>
   );
}
