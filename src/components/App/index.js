import React, { createContext, useReducer } from 'react';
import { guessReducer, initState } from '../../reducers/index.js'
import './App.scss';

const ReducerContext = createContext()


function App() {
  const [state, dispatch] = useReducer(guessReducer, initState);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
    <div className="App">
      <div className="left">
        <div className="input">
         input
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
