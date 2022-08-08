/*
Do not load all the content of the csv file into RAM via stream (read/write file content line by
line)
 */

const csv = require("csvtojson");
const fs = require("fs");

const readFile = fs.createReadStream('./data/data.csv');

const singleCSVRowBuffer = readFile.pipe(csv());

singleCSVRowBuffer.on('data', (row) => {
    return row;
}).on('close', () => {
        console.log('file was closed')
    }
).then(error => console.log(error));

