export const allCorrect = (targetWord, correctWords) => {
  if (correctWords.length === 0) return false;
  let target = [...new Set(targetWord.split(''))]; //uniq words
  let i = 0;
  while(i <= correctWords.length -1) {
    let word = correctWords[i];
    target = target.filter(w => w !== word);
    i++;
  }
  return target.length === 0;
}