/*Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string. You can optionally include or dis-include punctuation.*/

function encode(input, railsLength) {
    console.log(input, railsLength);

    const resultsArr = [];
    let result = '';
    Array(railsLength)
        .fill(1)
        .map((x, y) => x + y)
        .forEach(() => resultsArr.push([]));
    const inputArr = input.split('');
    let forwardDirection = true;
    let j = 0;
    inputArr.forEach((a, i) => {
        resultsArr[j].push(a);
        if (j === railsLength - 1 && forwardDirection) {
            j--;
            forwardDirection = !forwardDirection;
        } else {
            if (j === 1 && !forwardDirection) {
                forwardDirection = !forwardDirection;
                j = 0;
            } else j++;
        }
    });

    resultsArr.forEach(r => {
        result += r.join('');
    });

    // console.log(resultsArr);
    return result;
}

function decode(input, railsLength) {
    const resultsArr = [];
    let result = '';
    const arrayLengths = [];

const keys = Array(railsLength)
        .fill(1)
        .map((x, y) => x + y -1);



    const inputArr = input.split('');
    let forwardDirection = true;
    let j = 0;
    const arrs= [];
    inputArr.forEach((a, i) => {
      arrs.push(j);
        if (j === railsLength - 1 && forwardDirection) {
            j--;
            forwardDirection = !forwardDirection;
        } else {
            if (j === 1 && !forwardDirection) {
                forwardDirection = !forwardDirection;
                j = 0;
            } else j++;
        }
    });
    let prevStart = 0;
    keys.forEach((k,i)=> {
      
      const len = arrs.filter(a=> a===k).length;
       resultsArr.push(input.substr(prevStart , len).split(''));
       prevStart +=len;
       
    });

    console.log(resultsArr);

}

module.exports = { encode, decode };
