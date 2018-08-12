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
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    for(let i = 0; i < grades.length; i++) {
        let current_grade = grades[i]
        // Check if the score is less than 40 to begin with
        if(current_grade >= 38) {
        // Check if the difference between the next divisible by 5 is less than 3 
            let diff = 5 - (current_grade % 5)
            if(diff < 3) {
                current_grade = current_grade + diff
                grades[i] = current_grade
            } 
            // If true, round up and change result for current
            // If false, remain the same    
        } 
    }
    return grades
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
