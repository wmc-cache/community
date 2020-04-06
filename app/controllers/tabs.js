const Tab = require("../models/tabs");

class TabsCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await Tab.find({ title: new RegExp(ctx.query.q) })
      .limit(perPage)
      .skip(page * perPage);
  }

  async findById(ctx) {
    const { fields = "" } = ctx.query;
    const selectFields = fields
      .split(";")
      .filter((f) => f)
      .map((f) => " +" + f)
      .join("");
    const tab = await Tab.findById(ctx.params.id).select(selectFields);
    ctx.body = tab;
  }
  async create(ctx) {
    ctx.verifyParams({
      id: { type: "number", required: true },
      title: { type: "string", required: true },
      link: { type: "string", required: true },
    });
    const tab = await new Tab(ctx.request.body).save();
    ctx.body = tab;
  }
  async update(ctx) {
    ctx.verifyParams({
      id: { type: "number", required: true },
      title: { type: "string", required: true },
      link: { type: "string", required: true },
    });
    const tab = await Tab.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    ctx.body = tab;
  }
}

module.exports = new TabsCtl();
