const numOfPadding = 750;
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
const testLabelArray = Object.values(
  require("./data/testLabelArrayReduce" + numOfPadding + ".json")
);

const predictionPython = Object.values(
  require("./data/predictionOfPythonReduce" + numOfPadding + ".json")
);

const mlKNNPredictionPath =
  "./data/predictionOfMlKnnReduce" + numOfPadding + ".json";



saveResultMLKNN(mlKNNPredictionPath)

function saveResultMLKNN(mlKNNPredictionPath) {
  const trainData = [];
  const trainLabel = [];
  const testData = [];

  for (let i = 0; i < trainDataArray.length; i++) {
    trainData.push(trainDataArray[i]);
    trainLabel.push(trainLabelArray[i]);
  }
  for (let i = 0; i < testDataArray.length; i++) {
    testData.push(testDataArray[i]);
  }
  const knn_model = new KNN(trainData, trainLabel, { k: 2 });
  const prediction = knn_model.predict(testData);
  fs.writeFileSync(
    mlKNNPredictionPath,
    JSON.stringify(prediction, null, 2),
    "utf-8"
  );
}