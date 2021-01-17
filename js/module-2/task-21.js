function findLongestWord(string) {
  // Пиши код ниже этой строки
    const setOfWords = string.split(' ');
  let longestWord = setOfWords[0];

      /* решение через цикл for of  */
  
    // for (let word of setOfWords) {
    //     if (longestWord.length < word.length) {
    //         longestWord = word;
    //     }
    // }
  
      /* решениее через цикл for */
  
  for (let i = 0; i < setOfWords.length; i += 1){
    if (setOfWords[i].length > longestWord.length) {
      longestWord = setOfWords[i]
    }
  }
    return longestWord
  

  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

