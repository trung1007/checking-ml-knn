const fs = require('fs')
const KNN = require('ml-knn')

const KnnModelSaved = require('./data/savedKnnModel.json')

const KnnModelUsed = KNN.load(KnnModelSaved)

const testData =Object.values(require('./data/testDataVectorized.json'))
const prediction = KnnModelUsed.predict(testData)

fs.writeFileSync('./data/testSavedKnnResult.json', JSON.stringify(prediction,null,2),'utf-8')
