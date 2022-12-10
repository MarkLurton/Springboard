import React from "react";

const ButtonGroup = () => {
  const printColor = (e) => {
    console.log("YOU CLICKED: " + e.target.innerText);
  };
  return (
    <div>
      <button onClick={printColor}>Red</button>
      <button onClick={printColor}>Yellow</button>
      <button onClick={printColor}>Green</button>
    </div>
  );
};

export default ButtonGroup;
