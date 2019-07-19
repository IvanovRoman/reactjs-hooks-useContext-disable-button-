import React, { useContext } from "react";
import { CustomContext } from "../context";

const Button = (url, isSending) => {
  const { sendRequest } = useContext(CustomContext);

  console.log(isSending);
  return (
    <button onClick={() => sendRequest(url)} disabled="true">
      Click
    </button>
  );
};

export default Button;
