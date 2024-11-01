const fs = require('fs')
const KNN = require('ml-knn')

const paddingTrainData = Object.values(require('./data/paddingTrainDataArray.json'))
const paddingTestData = Object.values(require('./data/paddingTestDataArray.json'))
const trainLabelData = Object.values(require('./data/trainDataLabelArray.json'))
const testData = Object.values(require('./data/testData.json'))
const testLabelData = Object.values(require('./data/testLabelData.json'))

const trainEmbeddingData = Object.values(require('./data/embeddings.json'))
const testEmbeddingData = Object.values(require('./data/testEmbeddings.json'))


const size15_trainDataPadding = Object.values(require('./data/trainDataArrayReduce.json'))
const size15_testDataPadding = Object.values(require('./data/testDataArrayReduce.json'))
const size15_trainLabelData = Object.values(require('./data/trainDataLabelArrayReduce.json'))
const size15_testLabelData = Object.values(require('./data/testDataLabelArrayReduce.json'))

const predictionOfPaddingMLKNN = require('./data/predictionOfPaddingMLKNN.json')
const predictionOfPaddingPython = require('./data/predictionOfPaddingPython.json')
const predictionOfEmbeddingMLKNN = require('./data/predictionOfEmbeddingMLKNN.json')
const predictionOfEmbeddingPython = require('./data/predictionOfEmbeddingPython.json')
const predictionOfSize15VectorPython = require('./data/predictionOfSize15VectorPython.json')
const predictionOfSize15VectorPythonK5 = require('./data/predictionOfSize15VectorPythonK5.json')
const predictionOfSize15VectorPythonK1 = require('./data/predictionOfSize15VectorPythonK1.json')
const predictionOfSize15VectorMLKNN = require('./data/predictionOfSize15VectorMLKNN.json')







const trainDataArray = []
const trainLabelArray = []
const testDataArray = []

for (let i = 0; i < size15_trainDataPadding.length; i++) {
    trainDataArray.push(size15_trainDataPadding[i])
    trainLabelArray.push(size15_trainLabelData[i])
}
for (let i = 0; i < size15_testDataPadding.length; i++) {
    testDataArray.push(size15_testDataPadding[i])
}


// const knn_model = new KNN(trainDataArray, trainLabelArray, { k: 2 })
// console.log(knn_model);

// const predict_result = knn_model.predict(testDataArray)
// fs.writeFileSync('./data/predictionOfSize15VectorMLKNN.json', JSON.stringify(predict_result, null, 2))

// try {
//     const knn_model = new KNN(trainDataArray, trainLabelArray, { k: 2 })
//     const predict_result = knn_model.predict(testDataArray)
//     fs.writeFile('./data/predictionOfSize15VectorMLKNN.json', JSON.stringify(predict_result, null, 2))

// } catch (error) {
//     console.log(error);

// }




// evaluationModel(size15_testLabelData, predictionOfSize15VectorPython)
function evaluationModel(result_expect, result_actual) {
    let true_positive = 0;
    let false_positive = 0;
    let false_negative = 0;
    let true_negative = 0;

    for (let i = 0; i < result_expect.length; i++) {
        if (result_expect[i] === 1 && result_actual[i] === 1) {
            true_positive++;
        }
        if (result_expect[i] === 1 && result_actual[i] === 0) {
            false_positive++
        }
        if (result_expect[i] === 0 && result_actual[i] === 1) {
            false_negative++;
        }
        if (result_expect[i] === 0 && result_actual[i] === 0) {
            true_negative++;
        }
    }
    var precision = ((true_positive) / (true_positive + false_positive))
    var recall = ((true_positive) / (true_positive + false_negative))
    console.log("Accuracy of model: " + ((true_positive + true_negative) / result_actual.length).toFixed(2));
    console.log("Precision of model: " + precision.toFixed(2));
    console.log("Recall of model: " + recall.toFixed(2));
    console.log("F1-score of model: " + (2 * ((precision * recall) / (precision + recall))).toFixed(2));
}










