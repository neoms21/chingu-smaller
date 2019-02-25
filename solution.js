function intToArr(num) {
  return ("" + num).split("");
}

function findSmaller(num) {
  const numArr = intToArr(num);
  console.log("num arr", numArr);
  console.log("sorted", numArr.sort());
  if (numArr.length === 1 || numArr === numArr.sort()) {
    return -1;
  }
  return -1;
}

module.exports = findSmaller;
