import React from "react";

interface ITextProps {
  textType: string;
}

const Headers: React.FC<ITextProps> = (props) => {
  return (
    <>
      <h1>{props.textType}</h1>
    </>
  );
};

export default Headers;
