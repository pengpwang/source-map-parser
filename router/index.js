const fs = require('fs');
const Router = require('koa-router');
let router = new Router();

fs.readdirSync(__dirname).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.endsWith('.js'));
}).forEach((file) => {
  require(__dirname + '/' + file)(router);
});

module.exports = router;