const Hot = require("../models/hots");

class HotsCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    const q = new RegExp(ctx.query.q);
    ctx.body = await Hot.find({
      $or: [{ title: q }, { id: q }]
    })
      .limit(perPage)
      .skip(page * perPage);
  }

  async create(ctx) {
    ctx.verifyParams({
      id: { type: "string", required: true },
      title: { type: "string", required: true },
      description: { type: "string", required: false },
      img: { type: "string", required: false },
      hot: { type: "string", required: true }
    });
    const hot = await new Hot({
      ...ctx.request.body
    }).save();
    ctx.body = hot;
  }
}

module.exports = new HotsCtl();
