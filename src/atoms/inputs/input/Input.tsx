import React, { useState } from "react";
import "./style.scss";

interface IInputProps {
  onEnter(title: string): void;
}

const Input: React.FC<IInputProps> = (props) => {
  const [title, setTitle] = useState<string>("");
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
      <input
        className="main__input"
        placeholder={myPlaceholder}
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        type="text"
      />
    </>
  );
};

export default Input;
