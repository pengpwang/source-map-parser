const SourceMapController = require('../controller/source-map');

module.exports = (router) => {
  router.post('/sourcemap', SourceMapController.getOriginalSourceInfo);
};