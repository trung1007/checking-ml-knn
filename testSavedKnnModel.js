const fs = require('fs')
const KNN = require('ml-knn')

const KnnModelSaved = require('./data/model/savedKnnModel.json')

const KnnModelUsed = KNN.load(KnnModelSaved)

const testData =Object.values(require('./data/testData/testDataVectorized.json'))
const prediction = KnnModelUsed.predict(testData)

fs.writeFileSync('./data/prediction/testSavedKnnResult.json', JSON.stringify(prediction,null,2),'utf-8')
