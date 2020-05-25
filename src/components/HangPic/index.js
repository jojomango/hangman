import React, { useContext } from 'react';
import { ReducerContext } from '../App';

function HangPic() {
  const { state } = useContext(ReducerContext);
  const { missCount } = state;
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height:'100%',
      width: '100%'
    }}>
    {
      (missCount > 0) && (
        <img
          style={{ width: '100%' }}
          alt="statusPic"
          src={`/hangman/${missCount}.svg`}
        />
      )
    }
    </div>
  );
}

export default HangPic;
