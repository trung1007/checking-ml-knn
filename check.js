const trainData = require('./data/trainDataReduce.json')
const testData = require('./data/testDataReduce.json')
const trainDataArray = require('./data/trainDataArrayReduce.json')
const trainLabelArray = require('./data/trainDataLabelArrayReduce.json')
const testDataArray = require('./data/testDataArrayReduce.json')
const testLabelArray = require('./data/testDataLabelArrayReduce.json')
const labelOfPredictionSize15 = require('./data/predictionOfSize15VectorPython.json')
// console.log(trainData.length);
// console.log(trainDataArray.length);
// console.log(trainLabelArray.length);
// console.log(testData.length);
// console.log(testDataArray.length);
// console.log(testLabelArray.length);
// console.log(Object.values(testDataArray)[1].length);


function countSpam_Ham(data) {
    let spam = 0;
    let ham = 0;
    data.map((item) => {
        if (item === 1) {
            spam++;
        }
        else {
            ham++;
        }
    })
    console.log("Number of spam: " + spam);
    console.log("Number of ham: " + ham);
}
countSpam_Ham(labelOfPredictionSize15)





