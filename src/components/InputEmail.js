import React from "react";
import { StyledLabel, Input } from "./styled/StyledForm";

const InputEmail = ({ inputValue, inputChange, inputError }) => {
  function onInputChange(e) {
    inputChange(e.target.value);
  }
  return (
    <>
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <Input
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
