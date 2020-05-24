import React, { createContext, useReducer, useEffect } from 'react';
import { guessReducer, initState } from '../../reducers/index.js'
import InputWord from '../InputWord';
import Guessed from '../Guessed';
import StatusPanel from '../StatusPanel';
import Result from '../Result';
import './App.scss';
import { startGame, endGame } from '../../actions.js';
import { allCorrect } from '../helper';

export const ReducerContext = createContext();

function App() {
  const [state, dispatch] = useReducer(guessReducer, initState);
  const { targetWord, correctWords, missCount, missMax } = state;
  useEffect(() => {
    dispatch(startGame());
  }, []);
  useEffect(() => {
    if (missCount === missMax) {
      dispatch(endGame(false));
    } else {
      if (allCorrect(targetWord, correctWords)) {
        dispatch(endGame(true));
      }
    }
  }, [correctWords, missCount, targetWord, missMax]);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="left">
          <StatusPanel />
        </div>
        <div className="right">
          <div className="input">
            <InputWord />
          </div>
          <div className="guessed">
            <Guessed
              missMax={state.missMax}
              missCount={state.missCount}
              guessedWords={state.guessedWords}
            />
          </div>
        </div>
      </div>
      <Result />
    </ReducerContext.Provider>
  );
}

export default App;
