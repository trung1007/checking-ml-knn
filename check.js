const numOfPadding = 1000;

const trainData_nonReduce = Object.values(require('./data/trainDataArrayNoReduce.json'))
const trainLabel_nonReduce = Object.values(require('./data/trainLabelArrayNoReduce.json'))
const testData_nonReduce = Object.values(require('./data/testDataArrayNoReduce.json'))
const testLabel_nonReduce = Object.values(require('./data/testLabelArrayNoReduce.json'))
const train_embedding  = Object.values(require('./data/embeddings.json'))
const test_embedding = Object.values(require('./data/testEmbeddings.json'))
console.log(trainData_nonReduce.length);
console.log(trainLabel_nonReduce.length);
console.log(testData_nonReduce.length);
console.log(testLabel_nonReduce.length);
console.log(train_embedding.length);
console.log(test_embedding.length);




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

// console.log(trainDataArray.length);
// console.log(trainLabelArray.length);
// console.log(testDataArray.length);
// console.log(testLabelArray.length);

// countSpam_Ham(trainLabelArray, testLabelArray)

function countSpam_Ham(trainLabel, testLabel) {
  let spam_train = 0;
  let ham_train = 0;
  let spam_test = 0;
  let ham_test = 0;
  trainLabel.map((item) => {
    if (item) {
      spam_train++;
    } else {
      ham_train++;
    }
  });
  testLabel.map((item) => {
    if (item) {
      spam_test++;
    } else {
      ham_test++;
    }
  });
  console.log("Number of Spam Train: " + spam_train);
  console.log("Number of Ham Train: " + ham_train);
  console.log("Number of Spam Test: " + spam_test);
  console.log("Number of Ham Test: " + ham_test);
}
