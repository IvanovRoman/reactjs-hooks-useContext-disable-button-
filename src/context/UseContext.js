import React, { createContext, useState, useCallback } from "react";

export const Context = createContext();

export const Provider = props => {
  const { children } = props;

  let [names, setNames] = useState([]);
  let [isSending, setIsSending] = useState(false);
  let [url, setUrl] = useState(
    "https://api.github.com/repositories/19438/issues",
  );

  const handleInputChange = event => {
    setUrl(event.target.value);
  };

  const customContext = {
    handleInputChange,
    setNames,
    names,
    url,
  };

  return <Context.Provider value={customContext}>{children}</Context.Provider>;
};
