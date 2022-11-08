import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const { label, type, placeholder, name, error, ...rest } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} placeholder={placeholder} name={name} ref={ref} {...rest} />
      <p>{error}</p>
    </>
  );
});
