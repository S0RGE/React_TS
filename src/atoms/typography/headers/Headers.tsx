import React from "react";
import "./style.scss";

export enum HeadersVariants {
  h1_main = "h1-main",
  h2_main = "h2-main",
  h3_main = "h3-main",
  h4_main = "h4-main",
  h1_mobile = "h1-mobile",
  h2_mobile = "h2-mobile",
  h3_mobile = "h3-mobile",
  h4_mobile = "h4-mobile",
  text1_main = "text1-main",
  text2_main = "text2-main",
  text1_mobile = "text1-mobile",
  text2_mobile = "text2-mobile",
}

interface HeadersPropsType {
  textType: HeadersVariants;
}

const Headers: React.FC<HeadersPropsType> = ({ textType, children }) => {
  return <div className={textType}>{children}</div>;
};

export default Headers;
