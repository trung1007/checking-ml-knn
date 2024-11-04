const fs = require('fs')
const dictionaryPython = require('./common/document_vectors.json')
const trainDataText = require('./data/trainData/trainTextArray.json')
const testDataText = require('./data/testData/testTextArray.json')
const trainDataPath = './data/trainData/trainDataVectorized.json'
const testDataPath = './data/testData/testDataVectorized.json'

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



