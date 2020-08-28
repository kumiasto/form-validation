import React from "react";
import { StyledLabel, Textarea } from "./styled/StyledForm";

const InputText = ({ inputValue, inputChange, inputError }) => {
  function onInputChange(e) {
    inputChange(e.target.value);
  }
  return (
    <>
      <StyledLabel>Treść wiadomości</StyledLabel>
      <Textarea
        onChange={onInputChange.bind(this)}
        value={inputValue}
        id="text"
        maxLength="200"
      />
      {inputError}
    </>
  );
};

export default InputText;
