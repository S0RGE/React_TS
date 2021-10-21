import React, { useState, useEffect } from "react";
import "./style.scss";

interface IInputProps {
  onEnter(): void;
  onChange(title: string): void;
  inputPlaceholder: string;
  inputLabel: string;
  inputType: string;
  inputAlert: string;
}

const MainInput: React.FC<IInputProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [inputLabel, setInputLabel] = useState<string>(() => {
    return props.inputLabel;
  });
  const [inputId, setInputId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>(() => {
    return "Enter valid login/password"
  });
  const [myPlaceholder, setMyPlaceholder] = useState<string>(() => {
    return props.inputPlaceholder;
  });

  const [inputIcon, setInputIcon] = useState<string[]>(["input__icon--error"]);
  const [inputError, setInputError] = useState<string[]>(["input__error"]);
  const [inputMain, setInputMain] = useState<string[]>(["main__input"]);


  useEffect(() => {
    setInputId(Date.now().toString());
    if (!title.trim()) {
      console.log("error message", errorMessage);
      setInputError(["input__error", "displayBlock"]);
      setInputIcon(["input__icon--error", "displayBlock"]);
      setInputMain(["main__input", "red__border"]);
      
    } else {
      setInputError(["input__error", "displayNone"]);
      setInputIcon(["input__icon--error", "displayNone"]);
      setInputMain(["main__input"]);
      console.log("error no message");      
    }
  },[title]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    props.onChange(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onEnter();
      // setTitle("");
    }
  };

  return (
    <>
      <div className="input__container">
        <label className="input__label" htmlFor="inputId">
          {inputLabel}
        </label>
        <input
          id={inputId}
          className={inputMain.join(" ")}
          placeholder={myPlaceholder}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          type={props.inputType}
        />
        <div className={inputIcon.join(" ")}></div>
        <label className={inputError.join(" ")} htmlFor={inputId}>
          {errorMessage}
        </label>
      </div>
    </>
  );
};

export default MainInput;
