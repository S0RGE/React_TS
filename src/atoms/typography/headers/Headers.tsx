import React from "react";
import "./style.scss";

interface ITextProps {
  textType: string;
}

const Headers: React.FC<ITextProps> = (props) => {
  if (props.textType === "h1-main")
    return (
      <>
        <div className="h1-main">{props.children}</div>
      </>
    );
  else if (props.textType === "h2-main")
    return (
      <>
        <div className="h2-main">{props.children}</div>
      </>
    );
  else if (props.textType === "h3-main")
    return (
      <>
        <div className="h3-main">{props.children}</div>
      </>
    );
  else if (props.textType === "h4-main")
    return (
      <>
        <div className="h4-main">{props.children}</div>
      </>
    );
  else if (props.textType === "text1-main")
    return (
      <>
        <div className="text1-main">{props.children}</div>
      </>
    );
  else if (props.textType === "text2-main")
    return (
      <>
        <div className="text2-main">{props.children}</div>
      </>
    );
  else if (props.textType === "h1-mobile")
    return (
      <>
        <div className="h1-mobile">{props.children}</div>
      </>
    );
  else if (props.textType === "h2-mobile")
    return (
      <>
        <div className="h2-mobile">{props.children}</div>
      </>
    );
  else if (props.textType === "h3-mobile")
    return (
      <>
        <div className="h3-mobile">{props.children}</div>
      </>
    );
  else if (props.textType === "text1-mobile")
    return (
      <>
        <div className="text1-mobile">{props.children}</div>
      </>
    );
  else if (props.textType === "text2-mobile")
    return (
      <>
        <div className="text2-mobile">{props.children}</div>
      </>
    );

  return (
    <>
      <p>{props.children}</p>
    </>
  );
};

export default Headers;
