const fs = require('fs')
const trainData = Object.values(require('./data/trainData.json'))
const testData = Object.values(require('./data/testData.json'))

const trainDataPath = './data/trainData/trainTextArray.json'
const trainLabelPath = './data/trainData/trainLabelArray.json'
const testDataPath = './data/testData/testTextArray.json'
const testLabelPath = './data/testData/testLabelArray.json'


parseData(trainData, trainDataPath, trainLabelPath)
parseData(testData, testDataPath, testLabelPath)

function parseData(data, dataPath, labelPath) {
    const dataArray = []
    const labelArray = []
    data.map((item) => {
        if (item.spam) {
            labelArray.push(1)
        }
        else {
            labelArray.push(0)
        }
        dataArray.push(item.text)
    })
    fs.writeFileSync(dataPath, JSON.stringify(dataArray, null, 2), 'utf-8')
    fs.writeFileSync(labelPath, JSON.stringify(labelArray, null, 2), 'utf-8')
}
