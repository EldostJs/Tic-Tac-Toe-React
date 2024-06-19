import React from 'react';

function Restart({ onRestart }) {
  return (
    <button onClick={onRestart}>
      Restart Game
    </button>
  );
}

export default Restart;
