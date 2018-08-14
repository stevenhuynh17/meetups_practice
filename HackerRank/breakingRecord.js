'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    // Keep track of current min and max
    let min = scores[0]
    let max = scores[0]
    let minCount = 0
    let maxCount = 0
    
    // Keep track of how many times min and max changes
    scores.forEach((score) => {
        if(score > max) {
            max = score
            maxCount++
        }
        if(score < min) {
            min = score
            minCount++
        }
    })
    // Each time there is a new min or max, record the change
    // Return as a tuple?
    return [maxCount, minCount]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
