import React, { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const currentPlayer = isXNext ? '🌸' : '⭐';

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-pink-50 font-cute">
      <Header />
      <Board squares={squares} onClick={handleClick} />
      <div className="mt-4 text-lg text-gray-700">
        {winner
          ? `🎉 ${winner} wins!`
          : squares.every(Boolean)
          ? "It's a draw!"
          : `Next: ${currentPlayer}`}
      </div>
      <button
  onClick={restartGame}
  className="mt-6 px-6 py-2 bg-pink-100 text-pink-700 font-semibold rounded-xl shadow hover:bg-pink-200 transition"
>
  Restart
</button>
    </div>
  );
};

// 🎯 Game logic: check for winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
