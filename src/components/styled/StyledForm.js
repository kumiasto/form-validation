import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  padding-top: 40px;
  padding-bottom: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 auto;
  color: #32cd32;

  @media (max-width: 768px) {
    font-size: 23px;
    padding-bottom: 15px;
  }
`;
export const Input = styled.input`
  width: 430px;
  height: 50px;
  border: 1px solid lightgray;

  &:focus {
    outline: none !important;
    border: 1.5px solid #32cd32;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 10vw;
  }
`;

export const Textarea = styled.textarea`
  width: 430px;
  height: 100px;
  border: 1px solid lightgray;

  &:focus {
    outline: none !important;
    border: 1.5px solid #32cd32;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const InputError = styled.span`
  font-size: 10px;
  padding-top: 7px;
  font-weight: 700;
  color: red;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 85vh;
  padding-top: 20vh;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 10vh;
  }
`;

export const FormButton = styled.button`
  outline: none;
  margin-top: 40px;
  width: 40%;
  position: relative;
  top: 50%;
  left: 50%;
  padding: 12px 0;
  font-size: 15px;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 700;
  border: 3px solid #32cd32;
  background-color: #fff;
  letter-spacing: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #32cd32;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 60px;
    padding: 10px 10px;
    width: 50%;
    hover: none;
    background-color: #32cd32;
    color: #fff;
  }
`;
