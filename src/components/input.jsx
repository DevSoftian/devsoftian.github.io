import React, { Component } from "react";

const Input = ({ name, label, value, onChange, formType }) => {
  const helpLabel = `${name}Help`;

  return (
    <div class="form-floating mb-3 mx-auto">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={formType}
        class="form-control"
        id={name}
        aria-describedby={helpLabel}
        placeholder={label}
      />
      <small id={helpLabel} class="form-text text-muted">
        Please enter your {name}
      </small>
    </div>
  );
};

export default Input;
