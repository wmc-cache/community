const Router = require("koa-router");
const router = new Router({ prefix: "/lists" });
const { find, findById, create, update, delete: del } = require("../controllers/lists");

router.get("/", find);
router.post("/", create);
router.get("/:id", findById);
router.patch("/:id", update);
router.delete('/:id', del);
module.exports = router;
