const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.projects.list', '/', async (ctx)  =>{
    const projects = await ctx.orm.project.findAll();
    if (projects){
        ctx.body = ctx.jsonSerializer('project', {
            attributes: ['id', 'name', 'description', 'image', 'url'],
            topLevelLinks: {
                self: `${ctx.origin}${ctx.router.url('api.projects.list')}`,
            },
        }).serialize(projects);
    } else {
        ctx.body = 'Not found';
    }
});


module.exports = router;
