function intToArr(num) {
  return ('' + num).split('').map(a => Number(a));
}

function nextSmaller(num) {
  const numArr = intToArr(num);

  const lengthOfArr = numArr.length;
  let biggerResult;
  const failureDigits = [];
  const results = [];
  let result = '-1';

  const sortedInput = findSmallestDigit(numArr);

  if (sortedInput[0] === numArr[0].toString() && sortedInput === num.toString()) return -1;

  for (let i = lengthOfArr - 1; i >= 0; i--) {
    const numberBeingChecked = numArr[i];
    const filteredArray = numArr.filter((n, j) => j < i);
    biggerResult = anyBigger(filteredArray, numberBeingChecked, failureDigits);

    if (!biggerResult) {
      failureDigits.push(numberBeingChecked);
      continue;
    }

    if (biggerResult.areEqual) {
      if (biggerResult.smallerDigits.length === 0 || failureDigits.length === 0) {
        failureDigits.push(numberBeingChecked);
        continue;
      } else {
        biggerResult = { ...biggerResult, foundIndex: i };
        //  break;
      }
    } else {
      biggerResult = { ...biggerResult, foundIndex: i };
      // break;
    }
    if (biggerResult) {
      const { indexOfDigit, numberBeingChecked, foundIndex, smallerDigits, resultantDigit } = biggerResult;

      if (biggerResult.areEqual) {
        const remainingNumber = numArr.slice(0, indexOfDigit);

        result = remainingNumber.join('');

        const smlReversed = smallerDigits.sort().reverse();
        smlReversed.splice(1, 0, ...failureDigits, resultantDigit, numberBeingChecked);
        result = [result, ...smlReversed].join('');
      } else {
        result = numArr.slice();
        const numberAtFoundDigit = result[indexOfDigit];
        result[indexOfDigit] = numberBeingChecked;
        result[foundIndex] = numberAtFoundDigit;

        result = [
          ...result.slice(0, indexOfDigit + 1),
          ...result
            .slice(indexOfDigit + 1, result.length)
            .sort()
            .reverse(),
        ].join('');
      }
    }
    results.push(result);
  }

  const fr = results.sort()[results.length - 1];
  return fr.startsWith('0') ? -1 : Number(fr);
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

function findSmallestDigit(arr) {
  return arr
    .slice()
    .sort()
    .join('');
}

module.exports = nextSmaller;
