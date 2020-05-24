import React, { useContext } from 'react';
import MaskWord from './MaskWord';
import { ReducerContext } from '../App';

function StatusPanel() {
  const { state } = useContext(ReducerContext);
  const { targetWord, correctWords } = state;
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }}>
      <MaskWord targetWord={targetWord} correctWords={correctWords} />
    </div>
  )
}

export default StatusPanel;
