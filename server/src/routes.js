const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const api = require('./routes/api')

const router = new KoaRouter();

router.use('/api', api.routes());
router.use('/', index.routes());
router.use('/hello', hello.routes());

module.exports = router;
