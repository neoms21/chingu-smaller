function intToArr(num) {
  return ('' + num).split('').map(a => Number(a));
}

function nextSmaller(num) {
  const numArr = intToArr(num);

  const lengthOfArr = numArr.length;
  let biggerResult;
  const biggerDigits = [];

  for (let i = lengthOfArr - 1; i >= 0; i--) {
    const numberBeingChecked = numArr[i];
    const filteredArray = numArr.filter((n, j) => j < i);
    biggerResult = anyBigger(filteredArray, numberBeingChecked, biggerDigits);

    if (biggerResult) {
      biggerResult = { ...biggerResult, foundIndex: i };
      break;
    } else biggerDigits.push(numberBeingChecked);
  }
  console.log(biggerResult);
  if (biggerResult) {
    const { indexOfDigit, numberBeingChecked, foundIndex, smallerDigits } = biggerResult;
    let originalNumber = numArr.slice();
    let result = [];
    if (biggerResult.areEqual) {
      let remainingNumber = [];
      if (biggerDigits.length === 0 && indexOfDigit !== 0) {
        result = [...originalNumber.slice(0, indexOfDigit + 1)];

        remainingNumber = [...originalNumber.slice(indexOfDigit + 1)];
        console.log(result, remainingNumber);
        result = [...result, ...intToArr(nextSmaller(Number(remainingNumber.join(''))))].join('');
      } else {
        result = [...originalNumber.slice(0, indexOfDigit)];

        remainingNumber = [...originalNumber.slice(indexOfDigit)];
        smallerDigits.forEach((s, si) => {
          result.push(s);
        });
        const numberTobeReversed = [];
        remainingNumber
          .filter(r => {
            return smallerDigits.indexOf(r) === -1;
          })
          .forEach(x => numberTobeReversed.push(x));
        result = [...result, ...numberTobeReversed.sort().reverse()].join('');

        if (Number(result) > num) result = '0';
      }
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

    return result.startsWith('0') ? -1 : Number(result);
  }
  return -1;
}

function anyBigger(arr, number, existingFailures) {
  const result = null;
  const smallerDigits = [];
  for (i = arr.length - 1; i >= 0; i--) {
    // if (existingFailures.length === 0) {
    //   if (number < arr[i])
    //     return {
    //       resultantDigit: arr[i],
    //       indexOfDigit: i,
    //       numberBeingChecked: number,
    //       smallerDigits,
    //       areEqual: number === arr[i],
    //     };
    // } else {
    if (number <= arr[i])
      return {
        resultantDigit: arr[i],
        indexOfDigit: i,
        numberBeingChecked: number,
        smallerDigits,
        areEqual: number === arr[i],
      };
    else smallerDigits.push(arr[i]);
    // }
  }

  return result;
}

module.exports = nextSmaller;
