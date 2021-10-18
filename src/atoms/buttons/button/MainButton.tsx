import React, { useState } from "react";
import "./style.scss";

const MainButton: React.FC = () => {

  const [btnName, setBtnName] = useState<string>('Button')

  const clickHandler = () => {
    console.log("Button click");
  };

  return (
    <>
      <button onClick={clickHandler} className="btn">
        {btnName}
      </button>
    </>
  );
};

export default MainButton;
