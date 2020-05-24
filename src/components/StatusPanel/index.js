import React, { useContext } from 'react';
import MaskWord from './MaskWord';
import { ReducerContext } from '../App';

function StatusPanel() {
  const { state } = useContext(ReducerContext);
  const { targetWord, correctWords } = state;
  return (
    <MaskWord targetWord={targetWord} correctWords={correctWords} />
  )
}

export default StatusPanel;
