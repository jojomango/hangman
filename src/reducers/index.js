import { GUESS_TYPES } from '../actions';

const initState = {
  missCount: 0,
  guessedWords: [],
  targetWord: 'default',
  showResult: false,
}

const guessReducer = (state = initState, action) => {
  switch (action.type) {
      case GUESS_TYPES.START_GAME:
          return {
            missCount: 0,
            guessedWords: [],
            targetWord: action.newWord,
            showResult: false,
          }
      case GUESS_TYPES.ADD_CHAR: 
          return {
            ...state,
            guessedWords: state.guessedWords.concat([action.char]),
          }
      default:
          return state
  }
}

export { guessReducer, initState }