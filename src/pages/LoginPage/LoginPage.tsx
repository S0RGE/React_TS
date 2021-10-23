import React from "react";
import Headers from "../../atoms/typography/headers/Headers";
import LoginForm from "../../organisms/forms/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <Headers textType="h1-main">Welcome to Chatty!</Headers>
      <Headers textType="h2-main">Please, authorize yourself</Headers>
      <LoginForm />
    </>
  );
};

export default LoginPage;