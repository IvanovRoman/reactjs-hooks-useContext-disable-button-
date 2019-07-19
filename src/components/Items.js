import React, { useContext } from "react";
import { CustomContext } from "../context";

const Items = () => {
  const { names } = useContext(CustomContext);
  console.log(useContext(CustomContext));
  return (
    <div>
      {names.map((item, i) => (
        <div key={i}>{item.url}</div>
      ))}
    </div>
  );
};

export default Items;
