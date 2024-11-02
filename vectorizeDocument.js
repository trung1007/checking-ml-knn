const nj = require('numjs')
const dictionaryPython = require('./data/document_vectors.json')

const test_string = 'Hôm nay các số Vodafone kết thúc bằng fgfgfgfg'

let wordPerSentence = test_string.toLowerCase().trim().split(" ")

let testArray = []
for(let i =0;i<wordPerSentence.length;i++){
    if(wordPerSentence[i] in dictionaryPython){
        testArray.push(dictionaryPython[wordPerSentence[i]])
    }
    else{
        testArray.push(Array(100).fill(0))
    }
}




const columnMeans = testArray[0].map((_, colIndex) => {
    const sum = testArray.reduce((acc, row) => acc + row[colIndex], 0);
    return sum / testArray.length;
});

// console.log(columnMeans);

// for(let i = 0;i<testArray.length;i++){
//     let col_tmp = testArray.slice(null,[i,i+1])
//     console.log(col_tmp);
// }

