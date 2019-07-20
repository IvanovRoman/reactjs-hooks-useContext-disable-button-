import React, { useContext } from "react";
import { CustomContext } from "../context";

const Input = () => {
  const { handleInputChange, url } = useContext(CustomContext);
  return (
    <input type="text" name="url" value={url} onChange={handleInputChange} />
  );
};

export default Input;
