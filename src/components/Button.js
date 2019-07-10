import React, { useContext } from "react";
import { CustomContext } from "../context";

const Button = () => {
  const { sendRequest, isSending } = useContext(CustomContext);

  return (
    <button onClick={() => sendRequest()} disabled={isSending}>
      Click
    </button>
  );
};

export default Button;
