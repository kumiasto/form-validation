import React from "react";
import { StyledLabel, Input } from "./styled/StyledForm";

const InputName = ({ inputValue, inputChange, inputError }) => {
  function onInputChange(e) {
    inputChange(e.target.value);
  }
  return (
    <>
      <StyledLabel htmlFor="name">Imię</StyledLabel>
      <Input
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
