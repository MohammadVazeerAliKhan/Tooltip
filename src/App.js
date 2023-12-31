import "./App.css";
import { useState } from "react";
import ToolTip from "./Components/ToolTip.jsx";
function App() {
  const [position, setPosition] = useState("right");
  console.log(position);
  return (
    <div className="App">
      <header>
        <h1>Tooltip Demo</h1>
        <p>
          Select tooltip position of your choice, You will get the tooltip at
          the selected position
        </p>
        <div className="selectPosition">
          <h3>Select tooltip position</h3>
          <select
            defaultValue={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
        <h4>Current tooltip position is {position}</h4>
      </header>
      <ToolTip position={position} />
    </div>
  );
}

export default App;
