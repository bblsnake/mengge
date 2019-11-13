const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const path = require('path')
const app = new Koa();

app.use(KoaStatic(path.join(__dirname, './staric')));
var router = new KoaRouter();

var router = new Router();
 
router.get('/api/books', (ctx, next) => {
  // ctx.router available
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = [
    { bookName: 'php 入门到精通' },
    { bookName: 'node 入门到精通' },
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001, () => {
  console.log('server is running http://localhost:3001');
})