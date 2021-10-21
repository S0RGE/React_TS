import React, { useState } from "react";
import "./style.scss";

interface IButtonProps {
  disabledButton: boolean;
  btnText: string;
  onButtonClick(): void;
}

const MainButton: React.FC<IButtonProps> = (props) => {
  const [btnName, setBtnName] = useState<string>(props.btnText);

  const clickHandler = () => {
    props.onButtonClick();
  };

  return (
    <>
      <button
        disabled={!props.disabledButton}
        onClick={clickHandler}
        className="btn"
      >
        {btnName}
      </button>
    </>
  );
};

export default MainButton;
