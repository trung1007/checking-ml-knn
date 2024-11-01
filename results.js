const numOfPadding = 750;


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

const predictionMlKNN = Object.values(
  require("./data/predictionOfMlKnnReduce" + numOfPadding + ".json")
);

evaluationModelMLKNN(testLabelArray, predictionMlKNN);
evaluationModelPython(testLabelArray, predictionPython);

function evaluationModelMLKNN(result_expect, result_actual) {
  let true_positive = 0;
  let false_positive = 0;
  let false_negative = 0;
  let true_negative = 0;

  for (let i = 0; i < result_expect.length; i++) {
    if (result_expect[i] === 1 && result_actual[i] === 1) {
      true_positive++;
    }
    if (result_expect[i] === 1 && result_actual[i] === 0) {
      false_positive++;
    }
    if (result_expect[i] === 0 && result_actual[i] === 1) {
      false_negative++;
    }
    if (result_expect[i] === 0 && result_actual[i] === 0) {
      true_negative++;
    }
  }
  var precision = true_positive / (true_positive + false_positive);
  var recall = true_positive / (true_positive + false_negative);
  console.log("Result Of ml-knn prediction " + numOfPadding);

  console.log(
    "Accuracy of model: " +
      ((true_positive + true_negative) / result_actual.length).toFixed(2)
  );
  console.log("Precision of model: " + precision.toFixed(2));
  console.log("Recall of model: " + recall.toFixed(2));
  console.log(
    "F1-score of model: " +
      (2 * ((precision * recall) / (precision + recall))).toFixed(2)
  );
}

function evaluationModelPython(result_expect, result_actual) {
  let true_positive = 0;
  let false_positive = 0;
  let false_negative = 0;
  let true_negative = 0;

  for (let i = 0; i < result_expect.length; i++) {
    if (result_expect[i] === 1 && result_actual[i] === 1) {
      true_positive++;
    }
    if (result_expect[i] === 1 && result_actual[i] === 0) {
      false_positive++;
    }
    if (result_expect[i] === 0 && result_actual[i] === 1) {
      false_negative++;
    }
    if (result_expect[i] === 0 && result_actual[i] === 0) {
      true_negative++;
    }
  }
  var precision = true_positive / (true_positive + false_positive);
  var recall = true_positive / (true_positive + false_negative);
  console.log("Result Of Python prediction "  + numOfPadding);

  console.log(
    "Accuracy of model: " +
      ((true_positive + true_negative) / result_actual.length).toFixed(2)
  );
  console.log("Precision of model: " + precision.toFixed(2));
  console.log("Recall of model: " + recall.toFixed(2));
  console.log(
    "F1-score of model: " +
      (2 * ((precision * recall) / (precision + recall))).toFixed(2)
  );
}
