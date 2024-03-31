import React, { useState } from "react";
import "./Game4.css";
const imgXUrl = "./public/x.png";
const imgChestUrl = "./public/chest.png";
const imgSkullUrl = "./public/skull.png";
function BusquedaTesoro() {
  const [filas, setFilas] = useState(0);
  const [columnas, setColumnas] = useState(0);
  const [filaTesoro, setFilasTesoro] = useState(0);
  const [columnaTesoro, setColumnaTesoro] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [tablero, setTablero] = useState([]);

  //Preparamos los prompst para saber cuantas filas quiere el usuario, como nos mandara un strign como respuesta necesitamos cambiarla para modificar la cantidad
  const inicioJuego = () => {
    const filasUser = parseInt(prompt("¿Con cuantas filas quieres jugar?"));
    const columnasUser = parseInt(
      prompt("¿Con cuantas columnas quieres jugar?")
    );

    if (filasUser && columnasUser) {
      setFilas(filasUser);
      setColumnas(columnasUser);

      const posicionFilaTesoro = Math.floor(Math.random() * filasUser);
      const posicionColumnasTesoro = Math.floor(Math.random() * columnasUser);

      setFilasTesoro(posicionFilaTesoro);
      setColumnaTesoro(posicionColumnasTesoro);
      setIntentos(0);
      setGameOver(false);

      // const board = [];
      // const copyBoard = [...board]
      // copyBoard = setTablero(copyBoard)
      const nuevoTablero = [];
      for (let i = 0; i < filasUser; i++) {
        const fila = [];
        for (let j = 0; j < columnasUser; j++) {
          fila.push(imgXUrl);
        }
        nuevoTablero.push(fila);
      }
      setTablero(nuevoTablero);
    }
  };
  const celdaClick = (filaIndex, columnaIndex) => {
    if (!gameOver) {
      setIntentos((prevIntentos) => prevIntentos + 1);
      if (filaIndex === filaTesoro && columnaIndex === columnaTesoro) {
        setGameOver(true);
        const copiaTablero = [...tablero];
        copiaTablero[filaIndex][columnaIndex] = imgChestUrl;
        setTablero(copiaTablero);
        setTimeout(() => {
          alert("🎉¡Enhorabuena! Has ganado🎉");
        }, 200);
      } else {
        const copiaTablero = [...tablero];
        copiaTablero[filaIndex][columnaIndex] = imgSkullUrl;
        setTablero(copiaTablero);
      }
    }
  };
  return (
    <div className="Quientieneunamigotieneuntesoro">
      <h1>
        Intentos💪🏻: <span>{intentos}</span>
      </h1>
      <table>
        <tbody>
          {tablero.map((filas, filaIndex) => (
            <tr key={filaIndex}>
              {filas.map((columna, columnaIndex) => (
                <td
                  key={columnaIndex}
                  onClick={() => celdaClick(filaIndex, columnaIndex)}
                >
                  <img src={columna} alt="celdax" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={inicioJuego}>💪🏻¡Comenzar juego!💪🏻</button>
    </div>
  );
}
export default BusquedaTesoro;
