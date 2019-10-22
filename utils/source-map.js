const fs = require('fs');
const util = require('util');
const sourceMap = require('source-map');
const readFileAsync = util.promisify(fs.readFile);

const lookUpSourceMap = async (mapFile, line, column) => {
  try {
    if(!fs.existsSync(mapFile)){
      return null;
    }

    let data = await readFileAsync(mapFile);
    let smContent = data.toString();
    // let smObj = JSON.parse(smContent);

    let consumer =await new sourceMap.SourceMapConsumer(smContent);
    let result = consumer.originalPositionFor({
      line: parseInt(line),
      column: parseInt(column)
    });
    return result;
  } catch (err) {
    console.log('lookUpSourceMap Error', err);
  }
};

module.exports = {
  lookUpSourceMap
};