'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maxSubarray function below.
function maxSubarray(arr) {
    let sum = arr[0]
    let max = sum
    let sumsum = arr[0] < 0 ? 0: arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= 0)
        sumsum += arr[i]
        if (sum < 0) {
            sum = arr[i]
        } else {
            sum += arr[i]
        }
        if (sum > max) {
            max = sum
        }
    }
    if (sumsum === 0) {
        sumsum = Math.max(...arr)
    }
    console.log(max, sumsum)
    return [`${max}`, `${sumsum}`]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = maxSubarray(arr);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
