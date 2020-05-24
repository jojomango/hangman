import React, { useState, useContext } from 'react';
import { Input, Button } from 'antd';
import styles from './index.module.scss'
import { addCharacter } from '../../actions';
import { ReducerContext } from '../App';


function InputWord() {
  const { dispatch } = useContext(ReducerContext);
  const [word, setWord] = useState('');
  const onGuess = () => {
    dispatch(addCharacter(word));
    setWord('');
  }
  return (
    <div className={styles.row}>
      <div className={styles.inputfield}>
        <p>guess word</p>
        <Input
          placeholder="input a character"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
      </div>
      <Button onClick={onGuess}>Guess!</Button>
    </div>
  )
}

export default InputWord;
