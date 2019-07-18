import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Button from "./components/Button";
import { CustomContextProvider } from "./context";
import Input from "./components/Input";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      <CustomContextProvider>
        <h2>Действие 1</h2>
        <Input />
        <Button url="http://ya.ru" />
        <Items />
        <h2>Действие 2</h2>
        <Input />
        <Button url="http://ya.ru" />
        <Items />
        <h2>Действие 3</h2>
        <Input />
        <Button url="http://ya.ru" />
        <Items />
      </CustomContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
