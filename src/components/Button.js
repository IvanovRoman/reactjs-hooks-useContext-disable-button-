import React, { useContext, useCallback, useState } from "react";
import { CustomContext } from "../context";

const Button = () => {
  const { url, names, setNames } = useContext(CustomContext);
  let [isSending, setIsSending] = useState(false);

  const sendRequest = useCallback(() => {
    if (isSending) return;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNames(data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => setIsSending(false), 2500);
        // setIsSending(false);
      });

    setIsSending(true);
  }, [url, names]);

  return (
    <button onClick={() => sendRequest()} disabled={isSending}>
      Click
    </button>
  );
};

export default Button;
