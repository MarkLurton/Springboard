import Dice from "./Dice";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dice numDice={5} maxVal={6} />
    </div>
  );
}

export default App;
