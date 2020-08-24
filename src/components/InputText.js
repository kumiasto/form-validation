import React from "react";

const InputText = ({ inputValue, inputChange, inputError }) => {
  function onInputChange(e) {
    inputChange(e.target.value);
  }
  return (
    <>
      <label htmlFor="text">Treść wiadomości </label>
      <textarea
        onChange={onInputChange.bind(this)}
        value={inputValue}
        id="text"
        maxLength="200"
      ></textarea>
      {inputError}
    </>
  );
};

export default InputText;
