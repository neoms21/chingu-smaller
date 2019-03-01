function intToArr(num) {
  return ('' + num).split('').map(a => Number(a));
}

function nextSmaller(num) {
  const numArr = intToArr(num);

  const lengthOfArr = numArr.length;
  let biggerResult;
  const failureDigits = [];
  let result = '-1';

  for (let i = lengthOfArr - 1; i >= 0; i--) {
    const numberBeingChecked = numArr[i];
    const filteredArray = numArr.filter((n, j) => j < i);
    biggerResult = anyBigger(filteredArray, numberBeingChecked, failureDigits);
    if (biggerResult) {
      if (biggerResult.areEqual && biggerResult.smallerDigits.length === 0) {
        failureDigits.push(numberBeingChecked);
        continue;
      } else {
        biggerResult = { ...biggerResult, foundIndex: i };
        break;
      }
    } else failureDigits.push(numberBeingChecked);
  }

  console.log(biggerResult, failureDigits);
  if (biggerResult) {
    const { indexOfDigit, numberBeingChecked, foundIndex, smallerDigits, resultantDigit } = biggerResult;

    if (biggerResult.areEqual) {
      const remainingNumber = numArr.slice(0, indexOfDigit);

      //   console.log(
      //     remainingNumber,
      //     findSecondSmaller([...smallerDigits.reverse(), numberBeingChecked, ...failureDigits].join(''), resultantDigit)
      //   );
      result =
        remainingNumber.join('') +
        findSecondSmaller(
          [numberBeingChecked, ...smallerDigits.reverse(), ...failureDigits.reverse(), resultantDigit].join('')
        );
    } else {
      result = numArr.slice();
      const numberAtFoundDigit = result[indexOfDigit];
      result[indexOfDigit] = numberBeingChecked;
      result[foundIndex] = numberAtFoundDigit;
      // console.log(result);
      result = [
        ...result.slice(0, indexOfDigit + 1),
        ...result
          .slice(indexOfDigit + 1, result.length)
          .sort()
          .reverse(),
      ].join('');
    }
  }
  return result.startsWith('0') ? -1 : Number(result);
}

function generateAnagrams(word) {
  if (word.length < 2) {
    return [word];
  } else {
    // By declaring all variables outside of the loop,
    // we improve efficiency, avoiding the needless
    // declarations each time.

    var anagrams = [];
    var before, focus, after;
    var shortWord, subAnagrams, newEntry;

    for (var i = 0; i < word.length; i++) {
      before = word.slice(0, i);
      focus = word[i];
      after = word.slice(i + 1, word.length + 1);
      shortWord = before + after;
      subAnagrams = generateAnagrams(shortWord);

      for (var j = 0; j < subAnagrams.length; j++) {
        newEntry = focus + subAnagrams[j];
        anagrams.push(newEntry);
      }
    }

    return anagrams;
  }
}

function findSecondSmaller(str) {
  // console.log(str);
  let smallers = generateAnagrams(str);

  const initialNumber = Number(str);
  smallers = smallers.filter(a => {
    return Number(a) < initialNumber;
  });
  // console.log(smallers.sort());
  return smallers.sort()[smallers.length - 2];
}

function anyBigger(arr, number, existingFailures) {
  const result = null;
  const smallerDigits = [];
  for (i = arr.length - 1; i >= 0; i--) {
    if (number <= arr[i]) {
      return {
        resultantDigit: arr[i],
        indexOfDigit: i,
        numberBeingChecked: number,
        smallerDigits,
        areEqual: number === arr[i],
      };
    } else smallerDigits.push(arr[i]);
  }

  return result;
}

module.exports = nextSmaller;
