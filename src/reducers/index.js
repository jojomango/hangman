const initState = {
  missCount: 0,
  guessedWords: [],
  targetWord: 'default',
  showResult: false,
}

const guessReducer = (state = initState, action) => {
  switch (action.type) {
      case 'START_GAME':
          return {
            missCount: 0,
            guessedWords: [],
            targetWord: action.newWord,
            showResult: false,
          }
      default:
          return state
  }
}

export { guessReducer, initState }