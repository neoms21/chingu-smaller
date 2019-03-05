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
    let inputLength = input.length;
    const dividend = Math.floor(inputLength / railsLength);
    let rem = inputLength % railsLength;

    Array(railsLength)
        .fill(1)
        .map((x, y) => x + y)
        .forEach(() => arrayLengths.push(dividend));
        
    Array(railsLength)
        .fill(1)
        .map((x, y) => x + y)
        .forEach(() => resultsArr.push([]));
    let index = 0;
    while (rem !== 0) {
        arrayLengths[index] += rem--;
    }

    console.log(arrayLengths, rem);
    // const inputArr = input.split('');
    // let forwardDirection = true;
    // let j = 0;
    // //WECRLTEERDSOEEFEAOCAIVDEN
    // inputArr.forEach((a, i) => {
    //     const rem = i % railsLength;
    //     resultsArr[rem].push(a);
    //     // if (j === railsLength - 1 && forwardDirection) {
    //     //     j--;
    //     //     forwardDirection = !forwardDirection;
    //     // } else {
    //     //     if (j === 1 && !forwardDirection) {
    //     //         forwardDirection = !forwardDirection;
    //     //         j = 0;
    //     //     } else j++;
    //     // }
    // });

    // resultsArr.forEach(r => {
    //     result += r.join('');
    // });

    return result;
}

module.exports = { encode, decode };
