import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Button from "./components/Button";
import { CustomContextProvider } from "./context";
import Input from "./components/Input";
import Items from "./components/Items";

function App() {
  // const { bind } = useContext(CustomContext);

  return (
    <div className="App">
      <CustomContextProvider>
        <h2>Действие 1</h2>
        <Input />
        <Button />
        <Button />
        <Button />
        <Items />
      </CustomContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
