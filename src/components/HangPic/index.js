import React, { useContext } from 'react';
import { ReducerContext } from '../App';
// import styles from './index.scss';

function HangPic() {
  const { state } = useContext(ReducerContext);
  const { missCount } = state;
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height:'300px'
    }}>
    {
      (missCount > 0) && (
        <img alt="statusPic" src={`/hangman/${missCount}.svg`} />
      )
    }
    </div>
  );
}

export default HangPic;
