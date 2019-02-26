function intToArr(num) {
  return ('' + num).split('').map(a => Number(a));
}

function findSmaller(num) {
  const numArr = intToArr(num);
  let result = -1;
  if (
    numArr.length === 1 ||
    numArr.join('') ===
      numArr
        .slice()
        .sort()
        .join('')
  ) {
    return result;
  }

  const lengthOfArr = numArr.length;
  const biggerDigits = [];
  let x = numArr.slice();

  for (let i = lengthOfArr - 1; i >= 0; i--) {
    const numberBeingChecked = numArr[i];
    const filteredArray = numArr.filter((n, j) => j < i);
    const biggerResult = anyBigger(filteredArray, numberBeingChecked);

    if (!biggerResult) {
      biggerDigits.push(numberBeingChecked);
    } else {
      let arrResult = [];
      for (let j = 0; j < filteredArray.length; j++) {
        if (j === biggerResult.indexOfDigit) {
          arrResult.push(numberBeingChecked);
          arrResult = [...arrResult, ...biggerDigits];
        } else {
        }
        arrResult.push(filteredArray[j]);
      }

      const joinedNumber = arrResult.join('');
      result = joinedNumber.startsWith('0') ? -1 : joinedNumber;
      break;
    }
  }

  return result;
}

function anyBigger(arr, number) {
  const result = null;

  for (i = arr.length - 1; i >= 0; i--) {
    if (number < arr[i]) return { resultantDigit: arr[i], indexOfDigit: i };
  }

  return result;
}

module.exports = findSmaller;
