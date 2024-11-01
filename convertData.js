const fs = require('fs')
const dictionary = require('./data/dataset_new_vector_ori_size15.json')
const trainData = require('./data/trainData.json')
const testData = require('./data/testData.json')



const dataTrainArray = []
const dataTestArray = []
const labelArray = []
const numOfPadding = 1000
const trainDataPath = './data/trainDataArrayReduce1000.json'
const trainLabelPath = './data/trainLabelArrayReduce1000.json'
const testDataPath = './data/testDataArrayReduce1000.json'



convertDataTrain(trainData, numOfPadding)

convertDataTest(testData, numOfPadding)


reduceDataTrain(dataTrainArray, labelArray, numOfPadding, trainDataPath, trainLabelPath)


reduceDataTest(dataTrainArray, numOfPadding, testDataPath)


function flattenArray(arr) {
    return arr.flat(Infinity); // Flatten to 1D array
}
function convertDataTrain(data, numOfPadding) {
    const dataText = []
    data.map((item) => {
        dataText.push(item.text)
        if (item.spam) {
            labelArray.push(1)
        } else {
            labelArray.push(0)
        }
    })
    for (let i = 0; i < dataText.length; i++) {
        let wordPerSentence = dataText[i].toLowerCase().trim().split(" ");
        let arrayPerSentence = []
        for (let j = 0; j < wordPerSentence.length; j++) {
            if (wordPerSentence[j] in dictionary) {
                arrayPerSentence.push(dictionary[wordPerSentence[j]])
            }
            else {
                arrayPerSentence.push(dictionary['unknown'])
            }
        }
        let flattenedSentence = flattenArray(arrayPerSentence);
        while (flattenedSentence.length < numOfPadding) {
            flattenedSentence.push(0);
        }
        dataTrainArray.push(flattenedSentence);
    }
}


function convertDataTest(data, numOfPadding){
    const dataText = []
    data.map((item) => {
        dataText.push(item.text)
    })
    for (let i = 0; i < dataText.length; i++) {
        let wordPerSentence = dataText[i].toLowerCase().trim().split(" ");
        let arrayPerSentence = []
        for (let j = 0; j < wordPerSentence.length; j++) {
            if (wordPerSentence[j] in dictionary) {
                arrayPerSentence.push(dictionary[wordPerSentence[j]])
            }
            else {
                arrayPerSentence.push(1)
            }
        }
        let flattenedSentence = flattenArray(arrayPerSentence);
        while (flattenedSentence.length < numOfPadding) {
            flattenedSentence.push(0);
        }
        dataTestArray.push(flattenedSentence);
    }
}


function reduceDataTrain(data, label, numOfPadding, dataPath, labelPath) {
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].length > numOfPadding) {
            data.splice(i, 1); 
            label.splice(i, 1)
        }
    }
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    fs.writeFileSync(labelPath, JSON.stringify(label, null, 2), 'utf8');
}

function reduceDataTest(data, numOfPadding, testDataPath){
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].length > numOfPadding) {
            data.splice(i, 1); 
        }
    }
    fs.writeFileSync(testDataPath, JSON.stringify(data, null, 2), 'utf8');
}


