const singles = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,

  eleven: 11,
  tweleve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
};

const tens = {
  thirty: 30,
  fourty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const others = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

// const operations = {
//   M,
//   A,
// };

function parseInt(words) {
  const strippedWords = words
    .replace(/ and /, ' ')
    .toLowerCase()
    .split(' ');
  let result = 0;

  for (let i = 0; i < strippedWords.length; i++) {
    const currentWord = findWhichCollection(strippedWords[i]);
    const nextWord = strippedWords[i + 1] ? findWhichCollection(strippedWords[i + 1]) : undefined;

    console.log(`Stripped: ${strippedWords[i]} - ${JSON.stringify(currentWord)}`);
    console.log(`Next: ${strippedWords[i + 1]} - ${JSON.stringify(nextWord)}`);

    if (nextWord && nextWord.higher) {
      const cw = currentWord.single ? currentWord.single : currentWord.ten;
      result += cw * nextWord.higher;
    } else if (nextWord && nextWord.single) {
      const cw = currentWord.ten ? currentWord.ten : currentWord.single;
      result += cw + nextWord.single;
    }

    if (nextWord && nextWord.higher) ++i;
  }

  console.log(result);
  return result;
}

function findWhichCollection(word) {
  return {
    single: singles[word],
    ten: tens[word],
    higher: others[word],
  };
}

module.exports = parseInt;
