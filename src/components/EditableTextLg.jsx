import React from "react";
import { EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

export default function EditableTextLg(props) {
   const { bugElement } = props;
   return (
      <React.Fragment>
         <EditTextarea
            name={bugElement.moniker}
            rows={bugElement.lines}
            defaultValue={props.value}
            style={{ fontSize: "16px" }}
            onSave={bugElement.onSave}
         />
      </React.Fragment>
   );
}
