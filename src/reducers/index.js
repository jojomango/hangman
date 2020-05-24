import { GUESS_TYPES } from '../actions';

const initState = {
  missCount: 0,
  guessedWords: [],
  targetWord: 'default',
  showResult: false,
  correctWords: [],
}

const guessReducer = (state = initState, action) => {
  switch (action.type) {
      case GUESS_TYPES.START_GAME:
          return {
            missCount: 0,
            guessedWords: [],
            targetWord: action.newWord,
            showResult: false,
            correctWords: [],
          }
      case GUESS_TYPES.ADD_CHAR: 
          return {
            ...state,
            guessedWords: state.guessedWords.concat([action.char]),
            missCount: action.missing ? state.missCount + 1 : state.missCount,
            correctWords: action.missing ? state.correctWords : state.correctWords.concat([action.char]),
          }
      default:
          return state
  }
}

export { guessReducer, initState }