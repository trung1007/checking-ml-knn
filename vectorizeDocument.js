const nj = require('numjs')
const fs = require('fs')
const dictionaryPython = require('./data/document_vectors.json')
const trainDataText = require('./data/trainDataTextNoReduce.json')
const testDataText = require('./data/testDataTextNoReduce.json')
const trainDataPath = './data/trainDataVectorized.json'
const testDataPath = './data/testDataVectorized.json'

vectorizedData(trainDataText, trainDataPath)
vectorizedData(testDataText, testDataPath)

function vectorizedData(data, path) {
    const dataText = data
    const documentVector = []
    for (let i = 0; i < dataText.length; i++) {
        let wordPerSentence = dataText[i].toLowerCase().trim().split(' ')
        let documentArray = []
        for (let j = 0; j < wordPerSentence.length; j++) {
            if (wordPerSentence[j] in dictionaryPython) {
                documentArray.push(dictionaryPython[wordPerSentence[j]])
            }
            else {
                documentArray.push(Array(100).fill(0))
            }
        }
        const documentArrayMean = documentArray[0].map((_, colIndex) => {
            const sum = documentArray.reduce((acc, row) => acc + row[colIndex], 0);
            return sum / documentArray.length;
        });
        documentVector.push(documentArrayMean)
    }
    fs.writeFileSync(path, JSON.stringify(documentVector, null, 2), 'utf-8')
}

// let wordPerSentence = test_string.toLowerCase().trim().split(" ")

// let testArray = []
// for (let i = 0; i < wordPerSentence.length; i++) {
//     if (wordPerSentence[i] in dictionaryPython) {
//         testArray.push(dictionaryPython[wordPerSentence[i]])
//     }
//     else {
//         testArray.push(Array(100).fill(0))
//     }
// }




// const columnMeans = testArray[0].map((_, colIndex) => {
//     const sum = testArray.reduce((acc, row) => acc + row[colIndex], 0);
//     return sum / testArray.length;
// });

// console.log(columnMeans);

// for(let i = 0;i<testArray.length;i++){
//     let col_tmp = testArray.slice(null,[i,i+1])
//     console.log(col_tmp);
// }

