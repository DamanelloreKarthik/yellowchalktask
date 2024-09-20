import React, { useState } from "react";

const Sample = () => {
  // const [input1Value, setInput1Value] = useState("");
  // const [input2Value, setInput2Value] = useState("");

  const [input1Value, setInput1Value] = useState("Enter first value");
  const [input2Value, setInput2Value] = useState("Enter second value");

  const handleInput1Change = (e) => {
    setInput1Value(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2Value(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter first value"
        value={input1Value}
        onChange={handleInput1Change}
      />
      <input
        type="text"
        placeholder="Enter second value"
        value={input2Value}
        onChange={handleInput2Change}
      />
    </div>
  );
};

export default Sample;
