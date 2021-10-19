import React from "react";
import "./App.scss";
import LoginForm from "./organisms/forms/LoginForm/LoginForm";

function App() {
  const enterHandler = (title: string) => {
    console.log("From parent", title);
  };

  return (
    <div className="App" >
      <LoginForm />
    </div>
  );
}

export default App;
