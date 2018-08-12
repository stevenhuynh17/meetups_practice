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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let isNight = s.slice(-2)
    if(isNight === 'PM') { 
        let endSection = s.slice(2, -2)
        let frontSection = s.slice(0, 2)
        let converted = frontSection
        
        if(frontSection === '12') {
            return converted + endSection   
        } else {
            converted = Number(s.slice(0,2)) + 12     
            return converted + endSection
        }    
    } else {
        let frontSection = s.slice(0,2)
        if(frontSection === '12') {
            return '00' + s.slice(2,-2)
        } else {
            return s.slice(0, -2)    
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
