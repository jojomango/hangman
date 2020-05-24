import  randomWords from 'random-words';

export const GUESS_TYPES = {
  START_GAME: 'START_GAME',
  ADD_CHAR: 'ADD_CHAR',
  END_GAME: 'END_GAME',
}

export const startGame = () => ({
  type: GUESS_TYPES.START_GAME,
  newWord: randomWords()
})

export const addCharacter = char => ({
  type: GUESS_TYPES.ADD_CHAR,
  char,
})

export const endGame = () => ({
  type: GUESS_TYPES.END_GAME,
})