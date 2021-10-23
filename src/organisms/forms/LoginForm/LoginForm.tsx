import React, { useEffect, useState } from "react";
import "./style.scss";
import MainButton from "../../../atoms/buttons/button/MainButton";
import MainInput from "../../../atoms/inputs/input/MainInput";

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAlert, setPasswordAlert] = useState<string>("");
  const [loginAlert, setLoginAlert] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);

  

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

  const inputPasswordEnter = () => {
    if(!password.trim()){
      setPasswordAlert("Input valid password")
    } else{
      setPasswordAlert("")
    }
  };

  const inputLoginEnter = () => {
    if(!login.trim()){
      setLoginAlert("Input valid user name")
    } else{
      setLoginAlert("")
    }
  };

  const loginButtonClick = () => {
    console.log({
      login,
      password
    });
  };

  return (
    <>
      <form className="mainForm" onSubmit={submitHandler}>
        <MainInput
          inputType="text"
          inputAlert={loginAlert}
          onChange={enterLoginHandler}
          onEnter={inputLoginEnter}
          inputPlaceholder="Input user name"
          inputLabel="User name"
        />
        <MainInput
          inputType="password"
          onEnter={inputPasswordEnter}
          inputAlert={passwordAlert}
          onChange={enterPasswordHandler}
          inputPlaceholder="Input password"
          inputLabel="Password"
        />
        <MainButton
          onButtonClick={loginButtonClick}
          disabledButton={valid}
        > Log in </MainButton>
      </form>
    </>
  );
};

export default LoginForm;
