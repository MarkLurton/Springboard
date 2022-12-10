import React from "react";

const Clicker = () => {
  const fireLasers = () => {
    console.log("THE LASERS HAVE BEEN FIRED!!");
    console.log("ZAP! PEW! PEW! PEW!");
  };
  return (
    <>
      <button onMouseOver={fireLasers}>CLICK ME!</button>
      <textarea onScroll={fireLasers} rows="2">
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
        askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn askjdlmn
      </textarea>
    </>
  );
};

export default Clicker;
