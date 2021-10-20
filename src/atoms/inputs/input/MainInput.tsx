import React, { useState } from "react";
import "./style.scss";

interface IInputProps {
  onEnter(title: string): void;
  onChange(title: string): void;
  inputPlaceholder: string;
  inputLabel: string;
  inputType: string;
}

const MainInput: React.FC<IInputProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [inputLabel, setInputLabel] = useState<string>(props.inputLabel);
  const [inputId, setInputId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("errorMessage");
  const [myPlaceholder, setMyPlaceholder] = useState<string>(
    props.inputPlaceholder
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    props.onChange(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onEnter(title);
      console.log("Enter on input", title);
      setTitle("");
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
          className="main__input"
          placeholder={myPlaceholder}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          type={props.inputType}
        />
        <div className="input__icon--error">i</div>
        <label className="input__error" htmlFor={inputId}>
          {errorMessage}
        </label>
      </div>
    </>
  );
};

export default MainInput;
