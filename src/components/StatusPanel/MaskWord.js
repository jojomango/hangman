import React from 'react';

function MaskWord({ targetWord, correctWords }) {
  const target = targetWord.split('');
  return (
    <>
      {target.map((w, idx) => <span key={`${w}+${idx}`}>{correctWords.indexOf(w) > -1 ? w.toUpperCase() : '_'}</span>)}
    </>
  );
}

export default MaskWord;
