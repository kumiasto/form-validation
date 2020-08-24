import React from "react";

const InputName = ({ inputValue, inputChange, inputError }) => {
  function onInputChange(e) {
    inputChange(e.target.value);
  }
  return (
    <>
      <label htmlFor="name">Imię </label>
      <input
        onChange={onInputChange.bind(this)}
        value={inputValue}
        type="text"
        id="name"
        maxLength="30"
      />
      {inputError}
    </>
  );
};

export default InputName;
