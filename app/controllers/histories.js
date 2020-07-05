const History = require("../models/histories");

class historiesCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page * 1, 1) - 1;
    const perPage = Math.max(per_page * 1, 1);
    ctx.body = await History.find({ title: new RegExp(ctx.query.q) })
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
    const history = await History.findById(ctx.params.id).select(selectFields);
    ctx.body = history;
  }
  async create(ctx) {
    ctx.verifyParams({
      id: { type: "string", required: true },
      title: { type: "string", required: true },
    });
    const history = await new History(ctx.request.body).save();
    ctx.body = history;
  }
  async update(ctx) {

    const history = await History.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    ctx.body = history;
  }

  async delete(ctx) {
    await History.findByIdAndRemove(ctx.params.id);
    ctx.status = 204;
  }
}

module.exports = new historiesCtl();
