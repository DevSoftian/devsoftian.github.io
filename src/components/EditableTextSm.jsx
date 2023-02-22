import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function EditableTextSm(props) {
   return (
      <React.Fragment>
         <EditText name="textboxsm" defaultValue={props.value} />
      </React.Fragment>
   );
}