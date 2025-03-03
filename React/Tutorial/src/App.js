import { useState } from 'react';

function Square({ value, onSquareClick }) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    const nextSquares = squares.slice();

    if (squares[i] || winner) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
      setXisNext(false);
    } else {
      nextSquares[i] = "O";
      setXisNext(true);
    }
    
    setSquares(nextSquares);
    setWinner(calculateWinner(i, nextSquares));
  }

  function calculateWinner(i, squares) {
    if (squares[i%3] == squares[3+(i%3)] && squares[i%3] == squares[6+i%3]) {
      return squares[i];
    }
    if (squares[3*(i/3 | 0)] == squares[3*(i/3 | 0) + 1] && squares[3*(i/3 | 0)] == squares[3*(i/3 | 0) + 2] ) {
      return squares[i];
    }
    if (i % 2 == 0) {
      if (squares[0] == squares[4] && squares[0] == squares[8]) {
        return squares[i];
      }
      if (squares[2] == squares[4] && squares[2] == squares[6]) {
        return squares[i];
      }
    }
    return null;
  }

  return (
    <>
    <div className='status'><b>{status}</b></div>
    <div className = "board-row">
      <Square value = {squares[0]} onSquareClick={() => handleClick(0, winner)} />
      <Square value = {squares[1]} onSquareClick={() => handleClick(1, winner)} />
      <Square value = {squares[2]} onSquareClick={() => handleClick(2, winner)} />
    </div>
    <div className = "board-row">
      <Square value = {squares[3]} onSquareClick={() => handleClick(3, winner)} />
      <Square value = {squares[4]} onSquareClick={() => handleClick(4, winner)} />
      <Square value = {squares[5]} onSquareClick={() => handleClick(5, winner)} />
    </div>
    <div className = "board-row">
      <Square value = {squares[6]} onSquareClick={() => handleClick(6, winner)} />
      <Square value = {squares[7]} onSquareClick={() => handleClick(7, winner)} />
      <Square value = {squares[8]} onSquareClick={() => handleClick(8, winner)} />
    </div>
    </>
  );
}
