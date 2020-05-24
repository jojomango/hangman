import React, { createContext, useReducer } from 'react';
import { guessReducer, initState } from '../../reducers/index.js'
import './App.css';

const ReducerContext = createContext()


function App() {
  const [state, dispatch] = useReducer(guessReducer, initState);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
    <div className="App">
    </div>
    </ReducerContext.Provider>
  );
}

export default App;
