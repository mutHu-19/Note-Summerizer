const pdfParse = require('pdf-parse');
const fs = require('fs');

module.exports = async function parsePDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
};
