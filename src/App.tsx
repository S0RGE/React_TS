import React from "react";
import "./App.scss";
import Input from "./atoms/inputs/input/Input";
import MainButton from "./atoms/buttons/button/MainButton";

function App() {
  const enterHandler = (title: string) => {
    console.log("From parent", title);
  };

  return (
    <div className="App">
      <h1>Test-React App with TypeScript</h1>
      <Input onEnter={enterHandler} />
      <MainButton />
    </div>
  );
}

export default App;
