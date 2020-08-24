import React, { useState } from "react";
import Header from "./Header";
import InputName from "./components/InputName";
import InputEmail from "./components/InputEmail";
import InputText from "./components/InputText";
import validateEmail from "./regex/emailRegex";

const App = () => {
  const [userName, setUserName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [userText, setUserText] = useState("");
  const [errorText, setErrorText] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const showError = {
    notEmpty: "Pole nie może być puste",
    incorrect: "Błędny adres email",
  };

  const { notEmpty, incorrect } = showError;

  const errorIsEmpty = <span className="error">{notEmpty}</span>;
  const errorIncorrect = <span className="error">{incorrect}</span>;

  function checkUserNameValid() {
    if (!userName) {
      setErrorName(errorIsEmpty);
    } else {
      setErrorName("");
    }
  }

  function checkUserTextValid() {
    if (!userText) {
      setErrorText(errorIsEmpty);
    } else {
      setErrorText("");
    }
  }

  function checkUserEmailValid() {
    if (!userEmail) {
      setErrorEmail(errorIsEmpty);
    } else {
      if (validateEmail(userEmail)) {
        setErrorEmail("");
      } else {
        setErrorEmail(errorIncorrect);
      }
    }
  }
  function onFormSubmit(e) {
    e.preventDefault();
    checkUserNameValid();
    checkUserTextValid();
    checkUserEmailValid();
  }

  return (
    <>
      <Header />
      <div className="contact-form">
        <form onSubmit={onFormSubmit} className="contact">
          <InputName
            inputValue={userName}
            inputChange={setUserName}
            inputError={errorName}
          />
          <InputEmail
            inputValue={userEmail}
            inputChange={setUserEmail}
            inputError={errorEmail}
          />
          <InputText
            inputValue={userText}
            inputChange={setUserText}
            inputError={errorText}
          />
          <button className="button-form">Wyślij</button>
        </form>
      </div>
    </>
  );
};

export default App;
