function intToArr(num) {
  return ('' + num).split('').map(a => Number(a));
}

function findSmaller(num) {
  const numArr = intToArr(num);

  // if (
  //   numArr.length === 1 ||
  //   numArr.join('') ===
  //     numArr
  //       .slice()
  //       .sort()
  //       .join('')
  // ) {
  //   return result;
  // }

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
    // if (smallerDigits.length > 0) {
    //   console.log(...originalNumber.slice(0, indexOfDigit + 1));
    //   result = [...originalNumber.slice(0, indexOfDigit)].join('');
    // } else {
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
    // }
    console.log(result);

    return result.startsWith('0') ? -1 : Number(result);
  }
  return -1;
}

function anyBigger(arr, number, existingFailures) {
  const result = null;
  const smallerDigits = [];
  for (i = arr.length - 1; i >= 0; i--) {
    // if (existingFailures.length === 0) {
    if (number < arr[i]) return { resultantDigit: arr[i], indexOfDigit: i, numberBeingChecked: number, smallerDigits };
    // } else {
    //   // console.log('in else', existingFailures, number, arr[i]);
    //   if (number <= arr[i])
    //     return { resultantDigit: arr[i], indexOfDigit: i, numberBeingChecked: number, smallerDigits };
    //   else smallerDigits.push(arr[i]);
    // }
  }

  return result;
}

module.exports = findSmaller;
