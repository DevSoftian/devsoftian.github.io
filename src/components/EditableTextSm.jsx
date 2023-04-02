import React from "react";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function EditableTextSm(props) {
   const { bugElement } = props;
   return (
      <React.Fragment>
         <EditText
            name={bugElement.moniker}
            onSave={bugElement.onSave}
            rows={bugElement.lines}
            defaultValue={props.value}
         />
      </React.Fragment>
   );
}
