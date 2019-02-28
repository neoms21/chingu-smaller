const singles = {
  zero: 0,
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
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

const tens = {
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const others = {
  hundred: {value :100, order:1},
  thousand: {value:1000, order:2},
  million: {value:1000000, order:3},
};

function parseInt(words) {
  const strippedWords = words
    .split(' ').filter(w=> w!=='and').map(x=>x.toLowerCase());
    // console.log(strippedWords);
  let result = 0;
  let currentWordAlreadyAdded = false;
  let higherOrderCompleted = undefined;
  const collections = groupInCollections(strippedWords);
  // console.log(collections);

  collections.forEach( (c, i) => {
    // console.log(c)
    if (c.isHigher) {
        if(higherOrderCompleted > c.order)
          {
            result = result - collections[i-1].value;
            result += collections[i-1].value * c.value;
          }
       else{
           result = result * c.value;
           higherOrderCompleted = c.order;}
    } else {
       result += c.value;
    }
  });

  return result;
}

function groupInCollections(words) {
  const result = [];
  const collection = [];
  words.forEach(w => {
    const val = getValue(w);
    const obj = { key: w, value: val.value, isHigher: val.isHigher, order: val.order };

    collection.push(obj);
  });
  //   let innerCollections = [];
  //   collection.forEach(c => {
  //     if (!c.isHigher) {
  //       innerCollections = [];
  //       result.push(innerCollections);
  //     }
  //     innerCollections.push(c);
  //   });

  return collection;
}

function getValue(word) {
  if (word.indexOf('-') !== -1) {
    const combinedWords = word.split('-');
    return {value:tens[combinedWords[0]] + singles[combinedWords[1]]};
  }

  if (singles[word] !== undefined) return {value: singles[word]};

  if (tens[word]) return {value: tens[word]};

  if (others[word]) return {value:others[word].value, isHigher: true, order: others[word].order};
}

module.exports = parseInt;
