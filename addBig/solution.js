const add = (num1, num2) => {
  const lenOfNum1 = num1.length;
  const lenOfNum2 = num2.length;

  const lengthForLoop = lenOfNum1 >= lenOfNum2 ? lenOfNum1 : lenOfNum2;

  if (num1.length < lengthForLoop) {
    num1 = num1.padStart(lengthForLoop, '0');
  }
  if (num2.length < lengthForLoop) {
    num2 = num2.padStart(lengthForLoop, '0');
  }

  let result = '';

  let buffer = 0;
  for (let i = lengthForLoop - 1; i >= 0; i--) {
    const sum = Number(num1[i]) + Number(num2[i]) + buffer;
    // console.log(sum);
    if (sum >= 10) {
      diff = sum - 10;
      result = diff.toString() + result;
      buffer = 1;
    } else {
      result = sum.toString() + result;
      buffer = 0;
    }
    // console.log(result);
  }
  if (buffer !== 0) result = buffer + result;

  return result;
};

module.exports = add;
