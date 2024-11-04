const fs = require('fs')
const KNN = require('ml-knn')
const trainDataVectorized = Object.values(require('./data/trainData/trainDataVectorized.json'))
const trainLabelData = Object.values(require('./data/trainData/trainLabelArray.json'))
const k = 2
const KnnModel = new KNN(trainDataVectorized, trainLabelData, { k: k })
const savedKnnModelPath = './data/model/savedKnnModel.json'

fs.writeFileSync(savedKnnModelPath, JSON.stringify(KnnModel, null, 2), "utf-8")



