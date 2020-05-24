import React, { createContext, useReducer, useEffect } from 'react';
import { guessReducer, initState } from '../../reducers/index.js'
import InputWord from '../InputWord';
import Guessed from '../Guessed';
import StatusPanel from '../StatusPanel';
import './App.scss';
import { startGame } from '../../actions.js';

export const ReducerContext = createContext();

function App() {
  const [state, dispatch] = useReducer(guessReducer, initState);
  useEffect(() => {
    dispatch(startGame());
  }, []);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="left">
          <div className="input">
            <InputWord />
          </div>
          <div className="guessed">
            <Guessed
              missCount={state.missCount}
              guessedWords={state.guessedWords}
            />
          </div>
        </div>
        <div className="right">
          <StatusPanel />
        </div>
      </div>
    </ReducerContext.Provider>
  );
}

export default App;
