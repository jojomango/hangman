import React, { useContext } from 'react';
import { Modal, Button } from 'antd';
import { ReducerContext } from '../App';
import { startGame } from '../../actions';

function Result() {
  const { state, dispatch } = useContext(ReducerContext);
  const { showResult, win, targetWord } = state;
  return (
    <Modal
      visible={showResult}
      footer={null}
      closable={false}
    >
      <h4>{win ? 'WIN': 'LOSE'}</h4>
      <p>the word is</p>
      {showResult && (<h4>{targetWord}</h4>)}
      <Button
        onClick={() => dispatch(startGame())}
      >
        Restart
      </Button>
    </Modal>
  )
}

export default Result;