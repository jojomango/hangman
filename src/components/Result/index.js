import React, { useContext } from 'react';
import { Modal, Button } from 'antd';
import { ReducerContext } from '../App';
import { startGame } from '../../actions';

function Result() {
  const { state, dispatch } = useContext(ReducerContext);
  const { showResult, win, targetWord } = state;
  return (
    <Modal
      width="350px"
      visible={showResult}
      footer={null}
      closable={false}
      style={{
        textAlign: 'center'
      }}
    >
      <h4>You {win ? 'WIN': 'LOSE'}!</h4>
      <p style={{ margin: 0 }}>the word is</p>
      {showResult && (<h3>"{targetWord}"</h3>)}
      <Button
        style={{ marginTop: '30px' }}
        onClick={() => dispatch(startGame())}
      >
        Restart
      </Button>
    </Modal>
  )
}

export default Result;