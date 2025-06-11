import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  return (
   <div className="grid grid-cols-3 gap-4 sm:gap-5">

      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
