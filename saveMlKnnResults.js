const numOfPadding = 1000;
const fs = require("fs");

const KNN = require("ml-knn");

const trainDataArray = Object.values(
  require("./data/trainDataArrayReduce" + numOfPadding + ".json")
);
const trainLabelArray = Object.values(
  require("./data/trainLabelArrayReduce" + numOfPadding + ".json")
);
const testDataArray = Object.values(
  require("./data/testDataArrayReduce" + numOfPadding + ".json")
);

const mlKNNPredictionPath =
  "./data/predictionOfMlKnnReduce" + numOfPadding + ".json";

const trainDataEmbeddings = Object.values(require('./data/trainDataArrayNoReduceEmbeddings.json'))
const trainLabelArrayNoReduce = Object.values(require('./data/trainLabelArrayNoReduce.json'))

const testDataEmbeddings = Object.values(require('./data/testDataArrayNoReduceEmbeddings.json'))

const mlKnnPredictionEmbeddingsPath = './data/predictionOfMlKnnNoReduceEmbeddings.json'

saveResultMLKNN(mlKnnPredictionEmbeddingsPath, trainDataEmbeddings, trainLabelArrayNoReduce, testDataEmbeddings)

function saveResultMLKNN(mlKNNPredictionPath, train, label, test) {
  const trainData = [];
  const trainLabel = [];
  const testData = [];

  for (let i = 0; i < train.length; i++) {
    trainData.push(train[i]);
    trainLabel.push(label[i]);
  }
  for (let i = 0; i < test.length; i++) {
    testData.push(test[i]);
  }
  const knn_model = new KNN(trainData, trainLabel, { k: 2 });
  const prediction = knn_model.predict(testData);
  fs.writeFileSync(
    mlKNNPredictionPath,
    JSON.stringify(prediction, null, 2),
    "utf-8"
  );
}