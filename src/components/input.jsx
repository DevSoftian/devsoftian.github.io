import React, { Component } from "react";

const Input = ({ name, label, value, onChange, formType }) => {
  return (
    <div class="form-group col-3 mx-auto">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={formType}
        class="form-control"
        id={name}
        aria-describedby="usernameHelp"
        placeholder={label}
      />
      <small id="usernameHelp" class="form-text text-muted">
        Please enter your {name}
      </small>
    </div>
  );
};

export default Input;
