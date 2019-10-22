const path = require('path');
const config = require('../config');
const { lookUpSourceMap } = require('../utils/source-map');

class SourceMap {
  static async getOriginalSourceInfo(ctx) {
    try {
      // msg, url, row, col 
      // err 为Error对象的toSting后的字符串
      let { err } = ctx.request.body;
  
      // 优先选取err参数、
      let stackInfo = { msg: '', stackArr: [] };
      if(err){
        let errorList = err.split('\n');
        console.log(errorList);
        stackInfo.msg = errorList[0];
        let [, ...stackStrArr] = errorList;
        let stackInfoArr = [];
        const regExpIncludeBrackets = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
        const regExpNoBrackets = /at\s+(.*):(\d*):(\d*)/i;
        for(let v of stackStrArr){
          let [ functionName, filepath, line, column ] = [ '', '', '', '' ];
          let res = [];
          if(v.indexOf('(') > -1){
            res = regExpIncludeBrackets.exec(v);
            [ functionName, filepath, line, column ] = res.slice(1);
          }else{
            res = regExpNoBrackets.exec(v);
            [ filepath, line, column ] = res.slice(1);
            functionName = '';
          }
  
          stackInfoArr.push({
            functionName,
            filepath,
            basename: path.basename(filepath),
            line: parseInt(line),
            column: parseInt(column)
          });
        }
  
        console.log(0, stackInfoArr);
        // parse 
        for(let v of stackInfoArr){
          let res = await lookUpSourceMap(path.join(config.smDir, `${v.basename}.map`), v.line, v.column);
          console.log(1, res);
          if(res){
            let source = res.source;
            let originFileName = path.basename(source);
            let filepath = path.join(config.smDir, originFileName);
            let r = {
              file: res.sourcesContent,
              filepath,
              source: res.source,
              line: res.line,
              column: res.column,
            };
            stackInfo.stackArr.push(r);
          }
        }
  
        ctx.type = 'json';
        ctx.body = {
          code: 0,
          msg: 'successful operation',
          data: stackInfo
        }
      }else{
        ctx.type = 'json';
        ctx.body = {
          code: -1,
          data: '',
          msg: 'err参数不存在'
        };
      }
  
    } catch (err) {
      console.log('parser Error', err);
      ctx.type = 'json';
      ctx.body = {
        code: -2,
        data: '',
        msg: err.message
      };
    }
  }
}

module.exports = SourceMap;