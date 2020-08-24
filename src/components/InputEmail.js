import React from "react";

const InputEmail = ({ inputValue, inputChange, inputError }) => {
  function onInputChange(e) {
    inputChange(e.target.value);
  }
  return (
    <>
      <label htmlFor="email">Email </label>
      <input
        onChange={onInputChange.bind(this)}
        value={inputValue}
        type="text"
        id="email"
        maxLength="50"
      />
      {inputError}
    </>
  );
};

export default InputEmail;
