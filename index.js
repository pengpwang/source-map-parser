const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const router = require('./router');

const app = new Koa();
app.use(bodyParser());

app.use(router.routes())
  .use(router.allowedMethods());

app.on('error', (err) => {
  console.log('app Error', err);
});

app.listen(config.port, () => {
  console.log(`source-map-parser start success at port: ${config.port}`);
});
