import React from "react";
import "./style.scss";

interface IButtonProps {
  disabledButton?: boolean;
  onButtonClick(): void;
}

const MainButton: React.FC<IButtonProps> = ({ onButtonClick, disabledButton, children }) => {  

  const handleClickButton = () => {
    onButtonClick()
  };

  return (
    <>
      <button
        disabled={!disabledButton}
        onClick={handleClickButton}
        className="btn"
      >
        {children}
      </button>
    </>
  );
};

export default MainButton;
