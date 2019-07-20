import React, { useContext } from "react";
import { CustomContext } from "../context";

const Items = () => {
  const { names } = useContext(CustomContext);
  return (
    <div>
      {names.map((item, i) => (
        <div key={i}>{item.url}</div>
        // <div key={i}>"GI"</div>
      ))}
    </div>
  );
};

export default Items;
