import React, { useState } from "react";
import "./style.scss";

interface IInputProps {
  onEnter(): void;
  onChange(title: string): void;
  inputPlaceholder: string;
  inputLabel: string;
  inputType: string;
  inputAlert: string;
}

const MainInput: React.FC<IInputProps> = ({
  onChange,
  onEnter,
  inputLabel,
  inputPlaceholder,
  inputAlert,
  inputType,  
}) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    onChange(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <>
      <div className="input__container">
        <label className="input__label" >
          {inputLabel}
        </label>
        <input
          className={inputAlert ? ("main__input red__border") : ("main__input")}
          placeholder={inputPlaceholder}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          type={inputType}
        />
        {inputAlert && <div className={"input__icon--error"}></div>}
        {inputAlert && (
          <label className={"input__error"} >
            {inputAlert}
          </label>
        )}
      </div>
    </>
  );
};

export default MainInput;
