import React from "react";

export default function FormInput(props) {
  return (
    <>
      <label htmlFor={props.name} className="form-label fs-5 pt-2">
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}
