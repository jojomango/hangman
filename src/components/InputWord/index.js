import React, { useState, useContext } from 'react';
import { Input, Button } from 'antd';
import styles from './index.module.scss'
import { addCharacter } from '../../actions';
import { ReducerContext } from '../App';


function InputWord() {
  const { state, dispatch } = useContext(ReducerContext);
  const { guessedWords } = state;
  const [word, setWord] = useState('');
  const [errMsg, setErr] = useState('');
  const onGuess = () => {
    const missing = state.targetWord.indexOf(word) === -1;
    dispatch(addCharacter({
      char: word.toUpperCase(),
      missing
    }));
    setWord('');
  }
  const onInputChange = val => {
    const word = val.toUpperCase();
    setWord(word);
    if (guessedWords.indexOf(word) > -1) {
      setErr('word be guessed!');
    } else if (!/[A-Za-z]/.test(val)) {
      setErr('must be English character')
    } else {
      setErr('');
    }
  }
  return (
    <>
    <div className={styles.row}>
      <div className={styles.inputfield}>
        <p className={styles.title}><b>Guess word</b></p>
        <Input
          placeholder="input a character"
          value={word}
          maxLength={1}
          onChange={e => onInputChange(e.target.value)}
        />
      </div>
      <Button
        disabled={word === '' || errMsg !== ''}
        onClick={onGuess}
      >
        Guess!
      </Button>
    </div>
    {errMsg !== '' && (<p className={styles.error}>{errMsg}</p>)}
    </>
  )
}

export default InputWord;
