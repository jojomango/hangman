import React from 'react';

function Guessed({ missMax, missCount, guessedWords }) {
  return (
    <>
      <p>Missing count: {missCount}/{missMax}</p>
      <p>Gussed words: {
        guessedWords.map((w, idx) => (
          <span key={w}>{w}{idx !== guessedWords.length-1 ? ',':''}</span>
        ))
      }</p>
    </>
  );
}

export default Guessed