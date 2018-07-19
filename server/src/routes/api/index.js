const KoaRouter = require('koa-router');

const projectsApi = require('./projects');

const router = new KoaRouter();

router.use('/projects', projectsApi.routes());

module.exports = router;