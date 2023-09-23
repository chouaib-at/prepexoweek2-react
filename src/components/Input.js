import React, { useState } from "react";

const Input = ({ state, setState, label, placeholder, type }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        <p>data:{state}</p>
        <input
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export default Input;
