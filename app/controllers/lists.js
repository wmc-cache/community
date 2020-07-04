const List = require("../models/lists");

class ListsCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await List.find({ title: new RegExp(ctx.query.q) })
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
    const list = await List.findById(ctx.params.id).select(selectFields);
    ctx.body = list;
  }
  async create(ctx) {
    ctx.verifyParams({
      id: { type: "string", required: true },
      title: { type: "string", required: true },
    });
    const list = await new List(ctx.request.body).save();
    ctx.body = list;
  }
  async update(ctx) {
    ctx.verifyParams({
      title: { type: "string", required: true },
    });
    const list = await List.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    ctx.body = list;
  }
}

module.exports = new ListsCtl();
