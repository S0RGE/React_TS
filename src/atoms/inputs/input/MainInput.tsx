import React, { useState } from "react";
import "./style.scss";

interface InputPropsTypes {
  onEnter(): void;
  onChange(title: string): void;
  inputPlaceholder?: string;
  inputLabel?: string;
  inputType: string;
  inputAlert?: string;
}

const MainInput: React.FC<InputPropsTypes> = ({
  onChange,
  onEnter,
  inputLabel,
  inputPlaceholder,
  inputAlert,
  inputType,  
}) => {

  const [inputValue, setInputValue] = useState<string>(""); //TODO: refactor this

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
          value={inputValue}
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
