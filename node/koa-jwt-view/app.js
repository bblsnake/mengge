// nuxt: vue ssr
// next: react ssr
// nest: node 基于express
const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaView = require('koa-views')
const path = require('path')
const router = KoaRouter();
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken')
app.use(bodyParser());

// views 模板引擎 <template> ejs pug
app.use(KoaView(path.join(__dirname, './view'), { extension: 'ejs' }));
router.get('/', async(ctx) => {
  // ctx.body = `html`
  const userInfo = { userName: 123, sex: 0, hobby: ['1', '2', '3']}
  // 服务端渲染
  // spa + 服务端渲染 = 同构
  await ctx.render('index', {
    ...userInfo
  })
})
router.get('/login', async(ctx) => {
  await ctx.render('login');
})
router.post('/login', async(ctx) => {
  const data = ctx.request.body;
  if(data.userName === '123' && data.pwd === '456') {
    // 生成 token
    // 保持用户登录状态 每次请求 我都把uid传 { uid：000}
    // jwt 解决了传递数据 加密的功能
    // 加密的算法 payload(时间， 数据) 签名
    const token = jwt.sign({uid: 000}, 'secret', {
      expiresIn: 60
    })
    ctx.body = {
      code: 200,
      token: token
    }
  }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3005, () => {
  console.log('server is running 3005')
})