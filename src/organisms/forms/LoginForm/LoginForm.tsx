import React, { useState } from "react";
import  "./style.scss"
import MainButton from "../../../atoms/buttons/button/MainButton";
import MainInput from "../../../atoms/inputs/input/MainInput";

const LoginForm: React.FC = () => {
const[login, setLogin] = useState('')
const[password, setPassword] = useState('')


  const enterHandler = (title: string) => {
    console.log("Title from form", title);
  };

  const submitHandler = (event: React.FormEvent ): void => {
    event.preventDefault();
    
    console.log('Submit form');    
  }

  return (
    <>
      <h1>Welcome to Chatty!</h1>
      <h2>Please, authorize yourself</h2>
      <form className="mainForm" onSubmit={submitHandler}>
        <MainInput onEnter={enterHandler} />
        <MainInput onEnter={enterHandler} />
        <MainButton />
      </form>
    </>
  );
};

export default LoginForm;
