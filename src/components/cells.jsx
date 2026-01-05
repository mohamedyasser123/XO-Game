const Cell = ({ go, setGo ,id,cells,setCells,cell,winMassage}) => {
const onHandleClick = () => {
  if (winMassage) return;  

  if (cells[id]) return;  

  handleCellChange(go);
  setGo(go === "circle" ? "cross" : "circle");
};
const handleCellChange = (cellToChange) => {
  const copyCells = [...cells];
  copyCells[id] = cellToChange;
  setCells(copyCells);
};

  return (
    <div className="sqr" onClick={onHandleClick}>
        <div className={cell}>{cell?(cell==="circle"?"o":"x"):""}</div>
      
    </div>
  );
};

export default Cell;