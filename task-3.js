const findLongestWord = function (string) {
    let arrayWord = string.split(" ");
    let longestWord = arrayWord[0];
    let wordLength = arrayWord[0].length;
    for (let i = 1; i < arrayWord.length; i += 1) {
      if (wordLength < arrayWord[i].length) {
        wordLength = arrayWord[i].length;
        longestWord = arrayWord[i];
      }
    }
    return longestWord;
  };
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  console.log(findLongestWord("Google do a roll"));
  
  console.log(findLongestWord("May the force be with you"));