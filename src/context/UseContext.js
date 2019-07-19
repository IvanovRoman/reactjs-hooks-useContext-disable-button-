import React, { createContext, useState, useCallback } from "react";

export const Context = createContext();

export const Provider = props => {
  const { children } = props;

  let [names, setNames] = useState([]);
  let [isSending, setIsSending] = useState(false);
  let [url, setUrl] = useState(
    "https://api.github.com/repositories/19438/issues",
  );

  const sendRequest = useCallback(() => {
    // don't send again while we are sending
    if (isSending) return;
    // send the actual request
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNames(data);
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsSending(false);
      });

    setIsSending(true);
  }, [isSending, url]);

  const handleInputChange = event => {
    setUrl(event.target.value);
  };

  const customContext = {
    handleInputChange,
    names,
    url,
    isSending,
    sendRequest,
  };

  return <Context.Provider value={customContext}>{children}</Context.Provider>;
};
