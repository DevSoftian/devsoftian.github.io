import React from "react";
import "react-edit-text/dist/index.css";

export default function DateTimeElement(props) {
   const { bugElement } = props;
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
            name={bugElement.moniker}
            onSave={bugElement.onSave}
            rows={bugElement.lines}
            defaultValue={newStringy}
            id={newId}
            class="form-control"
            type="datetime-local"
         />
      </React.Fragment>
   );
}
