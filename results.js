const numOfPadding = 750;

// const testLabel_nonReduce = Object.values(require('./data/testLabelArrayNoReduce.json'))
// console.log(testLabel_nonReduce.length);


const testLabel_nonReduce = Object.values(require('./data/testData/testLabelArray.json'))



const predictionTestSavedKnn = Object.values(require('./data/prediction/testSavedKnnResultK5.json'))

// console.log(predictionByEmbeddedMlKnn.length);

console.log(testLabel_nonReduce.length);
console.log(predictionTestSavedKnn.length);



evaluationModel(testLabel_nonReduce,predictionTestSavedKnn,"Result of saved KNN")


function evaluationModel(result_expect, result_actual, typeText) {
  let true_positive = 0;
  let false_positive = 0;
  let false_negative = 0;
  let true_negative = 0;

  for (let i = 0; i < result_expect.length; i++) {
    if (result_expect[i] === 1 && result_actual[i] === 1) {
      true_positive++;
    }
    if (result_expect[i] === 1 && result_actual[i] === 0) {
      false_negative++;
    }
    if (result_expect[i] === 0 && result_actual[i] === 1) {
      false_positive++;
    }
    if (result_expect[i] === 0 && result_actual[i] === 0) {
      true_negative++;
    }
  }
  var precision = true_positive / (true_positive + false_positive);
  var recall = true_positive / (true_positive + false_negative);
  console.log(typeText);

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
