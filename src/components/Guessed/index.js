import React from 'react';

function Guessed({ missMax, missCount, missedWords }) {
  return (
    <>
      <p>Missing count: {missCount}/{missMax}</p>
      <p>Missed words: {
        missedWords.map((w, idx) => (
          <span key={w}>{w}{idx !== missedWords.length-1 ? ', ':''}</span>
        ))
      }</p>
    </>
  );
}

export default Guessed