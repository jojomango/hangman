import React, { createContext, useReducer, useEffect } from 'react';
import { guessReducer, initState } from '../../reducers/index.js'
import InputWord from '../InputWord';
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
            guessed
          </div>
        </div>
        <div className="right">
          status panel
        </div>
      </div>
    </ReducerContext.Provider>
  );
}

export default App;
