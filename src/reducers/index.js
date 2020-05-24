import { GUESS_TYPES } from '../actions';

const initState = {
  missCount: 0,
  missMax: 9,
  guessedWords: [],
  missedWords: [],
  targetWord: 'default',
  showResult: false,
  correctWords: [],
  win: false,
}

const guessReducer = (state = initState, action) => {
  switch (action.type) {
      case GUESS_TYPES.START_GAME:
          return {
            ...state,
            missCount: 0,
            guessedWords: [],
            targetWord: action.newWord,
            showResult: false,
            correctWords: [],
            missedWords: [],
            win: false,
          }
      case GUESS_TYPES.ADD_CHAR: 
          return {
            ...state,
            guessedWords: state.guessedWords.concat([action.char]),
            missedWords: action.missing ? state.missedWords.concat([action.char]) : state.missedWords,
            missCount: action.missing ? state.missCount + 1 : state.missCount,
            correctWords: action.missing ? state.correctWords : state.correctWords.concat([action.char]),
          }
      case GUESS_TYPES.END_GAME:
          return {
            ...state,
            win: action.win,
            showResult: true,
          }
      default:
          return state
  }
}

export { guessReducer, initState }