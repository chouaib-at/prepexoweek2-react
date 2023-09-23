import React, { useState } from "react";

const Numbers = () => {
  const [number, setNumber] = useState(0);
  const handleInc = () => {
    setNumber(number + 1);
  };
  const handleDec = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <div>
        <button onClick={handleInc}>inc</button>
        <button onClick={handleDec}>Dec</button>
      </div>
    </div>
  );
};

export default Numbers;
