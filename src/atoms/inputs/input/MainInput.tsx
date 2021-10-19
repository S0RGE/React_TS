import React, { useState } from "react";
import "./style.scss";

interface IInputProps {
  onEnter(title: string): void;
}

const MainInput: React.FC<IInputProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [inputId, setInputId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("errorMessage");
  const [myPlaceholder, setMyPlaceholder] = useState<string>("Input here");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
        <input
          id={inputId}
          className="main__input"
          placeholder={myPlaceholder}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          type="text"
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
