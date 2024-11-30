const fs = require('fs');
const trainData = require('./data/trainData.json')
const testData = require('./data/testData.json')

const data = [...trainData, ...testData]

const outputPath = './data/data.json';

// Ghi dữ liệu gộp vào tệp mới
fs.writeFile(outputPath, JSON.stringify(data, null, 2), 'utf8', (err) => {
  if (err) {
    console.error('Lỗi khi lưu dữ liệu:', err);
  } else {
    console.log('Dữ liệu đã được lưu thành công tại:', outputPath);
  }
});