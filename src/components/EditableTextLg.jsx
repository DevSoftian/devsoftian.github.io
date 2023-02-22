import React from "react";
import { EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function EditableTextLg(props) {
   return (
      <React.Fragment>
         <EditTextarea
            name="textboxlg"
            rows={props.lines}
            defaultValue={props.value}
            style={{ fontSize: "16px" }}
         />
      </React.Fragment>
   );
}
