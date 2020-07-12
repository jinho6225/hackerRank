'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  let map = {};
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    }
  }
  let a = false;
  for (let i = 0; i < s2.length; i++) {
    if (map.hasOwnProperty(s2[i])) {
      a = true;
    }
  }
  if (a) {
    return 'YES';
  } else {
    return 'NO';
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = twoStrings(s1, s2);

    ws.write(result + '\n');
  }

  ws.end();
}
