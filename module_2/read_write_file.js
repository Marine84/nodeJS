/*
• Read the content of csv file from ./csv directory. Example: https://epa.ms/nodejs19-hw1-ex1
• Use the csvtojson package to convert csv file to json object.
• Write the csv file content to a new txt file.
*/

const fs = require('fs');
const csv = require('csvtojson');

// const readCsvToJsonPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve(csv().fromFile('./data/data.csv'));
//         reject(Error("promise was rejected"));
//     })
// };
//
// const writeJsonToTxt = (data) => {
//     fs.writeFile(
//         './data/data.txt',
//         JSON.stringify(data),
//         (err) => {
//             if (err) {
//                 throw err;
//             }
//         });
// };
//
// readCsvToJsonPromise()
//     .then(jsonObject => writeJsonToTxt(jsonObject))
//     .catch(error => console.log(error));


const readCsvToJsonPromise = async () => await csv().fromFile('./data/data.csv');

const writeJsonToTxt = async (data) => fs.writeFile(
    './data/data.txt',
    JSON.stringify(data),
    (err) => {
        if (err) {
            throw err;
        }
    });

readCsvToJsonPromise()
    .then(jsonObject => writeJsonToTxt(jsonObject))
    .catch(error => console.log(error));
