/*Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string. You can optionally include or dis-include punctuation.*/

function encodeRailFenceCipher(input, railsLength) {
    const snakeItems = getSnake(input, railsLength);
    const resultsArr = [];
    let result = '';
    Array(railsLength)
        .fill(1)
        .map((x, y) => x + y)
        .forEach(() => resultsArr.push([]));
    const inputArr = input.split('');

    inputArr.forEach((a, i) => {
        resultsArr[snakeItems[i]].push(a);
    });

    resultsArr.forEach(r => {
        result += r.join('');
    });

    return result;
}

function decodeRailFenceCipher(input, railsLength) {
    const resultsArr = [];
    let result = '';
    const snakeItems = getSnake(input, railsLength);
    // console.log(snakeItems.join(','), snakeItems.length, input.length);
    const keys = Array(railsLength)
        .fill(1)
        .map((x, y) => x + y - 1);

    let prevStart = 0;

    keys.forEach(k => {
        const len = snakeItems.filter(a => a === k).length;
        resultsArr.push(input.substr(prevStart, len).split(''));
        prevStart += len;
    });

    snakeItems.forEach(s => {
        result += resultsArr[s].shift();
    });

    return result;
}

function getSnake(input, railsLength) {
    let inputLength = input.length;

    let i = 0;
    let snake = [];
    let temp = [];
    for (let index = 0; index < inputLength; index++) {
        snake.push(i % railsLength);
        temp.push(i % railsLength);
        if (i === railsLength - 1) {
            const itemsToAppend = temp.reverse().filter((x, i) => i !== 0 && i !== railsLength - 1);
            snake = [...snake, ...itemsToAppend];
            temp = [];

            index += itemsToAppend.length;
            i = 0;
        } else i++;
    }

    return snake.slice(0, inputLength);
}

module.exports = { encode: encodeRailFenceCipher, decode: decodeRailFenceCipher };
