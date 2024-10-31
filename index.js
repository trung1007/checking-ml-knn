const fs = require('fs')
const KNN = require('ml-knn')

const paddingTrainData = Object.values( require('./data/paddingTrainDataArray.json'))
const paddingTestData = Object.values(require('./data/paddingTestDataArray.json'))
const trainLabelData = Object.values(require('./data/trainDataLabelArray.json'))
const testData = Object.values(require('./data/testData.json'))
const testLabelData= Object.values(require('./data/testLabelData.json'))

const trainEmbeddingData = Object.values(require('./data/embeddings.json'))
const testEmbeddingData = Object.values(require('./data/testEmbeddings.json'))



const trainDataArray = []
const trainLabelArray = []
const testDataArray = []

for(let i = 0; i<paddingTrainData.length;i++){
    trainDataArray.push(paddingTrainData[i])
    trainLabelArray.push(trainLabelData[i])
}
for(let i = 0; i< paddingTestData.length;i++){
    testDataArray.push(paddingTestData[i])
}

// const knn_model = new KNN(trainDataArray, trainLabelArray,{k:2})
// const predict_result = knn_model.predict(testDataArray)

const predictionOfPaddingMLKNN = require('./data/predictionOfPaddingMLKNN.json')
const predictionOfPaddingPython = require('./data/predictionOfPaddingPython.json')
const predictionOfEmbeddingMLKNN = require('./data/predictionOfEmbeddingMLKNN.json')
const predictionOfEmbeddingPython = require('./data/predictionOfEmbeddingPython.json')




let true_positive = 0;
let false_positive = 0;
let false_negative = 0;
let true_negative = 0;

for (let i = 0; i < testLabelData.length; i++) {
    if (testLabelData[i] === 1 && predictionOfEmbeddingPython[i] === 1) {
        true_positive++;
    }
    if (testLabelData[i] === 1 && predictionOfEmbeddingPython[i] === 0) {
        false_positive++
    }
    if (testLabelData[i] === 0 && predictionOfEmbeddingPython[i] === 1) {
        false_negative++;
    }
    if (testLabelData[i] === 0 && predictionOfEmbeddingPython[i] === 0) {
        true_negative++;
    }
}
var precision = ((true_positive) / (true_positive + false_positive))
var recall = ((true_positive) / (true_positive + false_negative))
console.log("Accuracy of model: " + ((true_positive + true_negative) / predictionOfEmbeddingPython.length).toFixed(2));
console.log("Precision of model: " + precision.toFixed(2));
console.log("Recall of model: " + recall.toFixed(2));
console.log("F1-score of model: " + (2 * ((precision * recall) / (precision + recall))).toFixed(2));








