import React, { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
  const genRandom = () => Math.floor(Math.random() * 10) + 1;
  const [guess, setGuess] = useState(genRandom());
  const [target, setTarget] = useState(genRandom());
  const [guesses, setGuesses] = useState(0);
  const restart = () => {
    setTarget(genRandom());
    setGuess(0);
    setGuesses(0);
  };
  const makeGuess = () => {
    setGuess(genRandom());
    setGuesses(guesses + 1);
  };
  const isWinner = target === guess;
  return (
    <div>
      <h1>Target Num: {target}</h1>
      <h1 className={isWinner ? "winner" : "loser"}>Your Guess: {guess}</h1>
      <h2>Total Guesses: {guesses}</h2>
      {!isWinner && <button onClick={makeGuess}>Generate Num</button>}
      <button onClick={restart}>New Game</button>
    </div>
  );
};

export default NumberGame;
