import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function EditableTextSm(props) {
   return (
      <React.Fragment>
         <EditText
            name={props.moniker}
            onSave={props.onSave}
            rows={props.lines}
            defaultValue={props.value}
         />
      </React.Fragment>
   );
}
