import React from "react";
import "./ColorButtons.css";

const ColorButtons = ({ addCircle, options }) => {
  return (
    <div>
      {options.map((color) => (
        <button
          onClick={() => addCircle(color)}
          className="ColorButtons-btn"
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorButtons;
