import React from "react";
import Headers, {HeadersVariants} from "../../atoms/typography/headers/Headers";
import LoginForm from "../../organisms/forms/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <Headers textType={HeadersVariants.h1_main}>Welcome to Chatty!</Headers>
      <Headers textType={HeadersVariants.h2_main}>Please, authorize yourself</Headers>
      <LoginForm />
    </>
  );
};

export default LoginPage;