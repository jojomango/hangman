import React from 'react';

function Guessed({ missCount, guessedWords }) {
  return (
    <>
      <p>Missing count: {missCount}/9</p>
      <p>Gussed words: {
        guessedWords.map((w, idx) => (
          <span>{w}{idx !== guessedWords.length-1 ? ',':''}</span>
        ))
      }</p>
    </>
  );
}

export default Guessed