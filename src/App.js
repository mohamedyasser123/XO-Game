import { useEffect, useState } from 'react';
import './App.css';
import Cell from './components/cells';

function App() {
  const compowins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winMassage, setMassge] = useState("");
  useEffect(() => {
  compowins.forEach((com) => {
    if (com.every((cell) => cells[cell] === "circle")) {
      setMassge("circle is win");
    }
    if (com.every((cell) => cells[cell] === "cross")) {
      setMassge("cross is win");
    }
  });
}, [cells]);

useEffect(() => {
  if (cells.every((cell) => cell !== "") && !winMassage) {
    setMassge("Draw");
  }
}, [cells, winMassage]);
  return (
    <div className="App">
      <div className='box'>
        {cells.map((cell, index) => (
          <Cell
            cells={cells}
            setCells={setCells}
            id={index}
            go={go}
            setGo={setGo}
            cell={cell}
            winMassage={winMassage}
            key={index}></Cell>
        ))}


      </div>
  
      <div className="status">
  {winMassage ? winMassage : `It's now ${go}`}
</div>
    </div>
  );
}

export default App;
