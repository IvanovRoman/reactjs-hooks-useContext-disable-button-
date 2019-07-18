import React, { useContext } from "react";
import { CustomContext } from "../context";

const Button = url => {
  const { sendRequest, isSending } = useContext(CustomContext);

  return (
    <button onClick={() => sendRequest(url)} disabled={isSending}>
      Click
    </button>
  );
};

export default Button;
