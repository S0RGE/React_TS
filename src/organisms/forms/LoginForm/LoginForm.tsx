import React, { useEffect, useState } from "react";
import "./style.scss";
import MainButton from "../../../atoms/buttons/button/MainButton";
import MainInput from "../../../atoms/inputs/input/MainInput";

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAlert, setPasswordAlert] = useState<string>("");
  const [loginAlert, setLoginAlert] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    if (login.trim() && password.trim()) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [login, password]);

  const enterLoginHandler = (title: string) => {
    setLogin(title);
  };

  const enterPasswordHandler = (title: string) => {
    setPassword(title);
  };

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  const inputEnter = () => {
   console.log("On enter");
  };

  const btnClick = () => {
    console.log("Login:", login);
    console.log("Password:", password);
  };

  return (
    <>
      <h1>Welcome to Chatty!</h1>
      <h2>Please, authorize yourself</h2>
      <form className="mainForm" onSubmit={submitHandler}>
        <MainInput
          inputType="text"
          inputAlert={passwordAlert}
          onChange={enterLoginHandler}
          onEnter={inputEnter}
          inputPlaceholder="Input user name"
          inputLabel="User name"
        />
        <MainInput
          inputType="password"
          onEnter={inputEnter}
          inputAlert={loginAlert}
          onChange={enterPasswordHandler}
          inputPlaceholder="Input password"
          inputLabel="Password"
        />
        <MainButton
          onButtonClick={btnClick}
          btnText="Log in"
          disabledButton={valid}
        />
      </form>
    </>
  );
};

export default LoginForm;
