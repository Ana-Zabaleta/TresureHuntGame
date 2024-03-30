import React, { useState } from "react";

function TreasureHunt() {
  const [tableBoard, setTableBoard] = useState([]);

  const [attempts, setAttempts] = useState(0);

  const [imgXUrl, setImgXUrl] = useState("./public/exercise-4/x.png");

  const [imgChestUrl, setImgChestUrl] = useState(
    "./public/exercise-4/chest.png"
  );

  const [imgSkullUrl, setImgSkullUrl] = useState(
    "./public/exercise-4/skull.png"
  );

  const [winnerCoor, setWinnerCoor] = useState({ x: 0, y: 0 });

  const [gameIsOver, setGameIsOver] = useState(false);

  function drawBoard() {
    setGameIsOver(false);

    const rows = prompt("Introduce número de filas");

    const cols = prompt("Introduce número de columnas");

    setRandomBoatCoor(rows, cols);

    let tableBoard = [];

    for (let i = 0; i < rows; i++) {
      let row = [];

      for (let j = 0; j < cols; j++) {
        row.push(
          <td key={`${i}-${j}`}>
            <img onClick={() => checkShot(i, j)} src={imgXUrl} alt="x" />
          </td>
        );
      }

      tableBoard.push(<tr key={i}>{row}</tr>);
    }

    setTableBoard(tableBoard);
  }

  function checkShot(i, j) {
    if (!gameIsOver) {
      setAttempts(attempts + 1);

      if (winnerCoor.x === i && winnerCoor.y === j) {
        let td = document.querySelector(
          `tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
        );

        td.firstChild.src = imgChestUrl;

        setTimeout(() => {
          alert("👏🏻Has ganado👏🏻!!!!");

          setGameIsOver(true);
        }, 200);
      } else {
        let td = document.querySelector(
          `tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
        );

        td.firstChild.src = imgSkullUrl;
      }
    }
  }

  function setRandomBoatCoor(maxRows, maxCols) {
    setWinnerCoor({
      x: Math.floor(Math.random() * maxRows),

      y: Math.floor(Math.random() * maxCols),
    });
  }

  return (
    <div>
      <button onClick={drawBoard}>Click to Play</button>

      <table>
        <tbody>{tableBoard}</tbody>
      </table>
    </div>
  );
}

export default TreasureHunt;
