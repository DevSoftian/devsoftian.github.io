import React from "react";
import { EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function EditableTextLg(props) {
   return (
      <React.Fragment>
         <EditTextarea
            name={props.moniker}
            rows={props.lines}
            defaultValue={props.value}
            style={{ fontSize: "16px" }}
            onSave={props.onSave}
         />
      </React.Fragment>
   );
}
