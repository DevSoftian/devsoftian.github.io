import React, { Component } from "react";

/*Input component*/

const Input = ({ name, label, value, onChange, formType }) => {
   const helpLabel = `${name}Help`;

   return (
      <div className="form-floating mb-3 mx-auto">
         <label htmlFor={name}>{label}</label>
         <input
            value={value}
            name={name}
            onChange={onChange}
            type={formType}
            className="form-control"
            id={name}
            aria-describedby={helpLabel}
            placeholder={label}
         />
         <small id={helpLabel} className="form-text text-muted">
            Please enter your {name}
         </small>
      </div>
   );
};

export default Input;
