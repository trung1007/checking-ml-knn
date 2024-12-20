const fs = require('fs')
const KNN = require('ml-knn')
const trainDataVectorized = Object.values(require('./data/trainData/trainDataVectorized.json'))
const trainLabelData = Object.values(require('./data/trainData/trainLabelArray.json'))
const k = 5
const KnnModel = new KNN(trainDataVectorized, trainLabelData, { k: k })
const savedKnnModelPath = './data/model/savedKnnModelK5.json'

fs.writeFileSync(savedKnnModelPath, JSON.stringify(KnnModel, null, 2), "utf-8")



