import React, { useState } from "react";
import "./style.scss";

interface IButtonProps {
  disabledButton: boolean;
}

const MainButton: React.FC<IButtonProps> = (props) => {

  const [btnName, setBtnName] = useState<string>('Button')

  const clickHandler = () => {
    console.log("Button click", props.disabledButton);
  };

  return (
    <>
      <button disabled={!props.disabledButton} onClick={clickHandler} className="btn">
        {btnName}
      </button>
    </>
  );
};

export default MainButton;
