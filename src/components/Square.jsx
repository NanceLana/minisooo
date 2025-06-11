import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-3xl border border-pink-200 shadow flex items-center justify-center text-4xl sm:text-5xl transition-transform hover:scale-105 active:scale-95"
    >
      {value}
    </button>
  );
};

export default Square;
