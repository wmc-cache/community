const Router = require("koa-router");
const router = new Router({ prefix: "/histories" });
const { find, findById, create, update, delete: del } = require("../controllers/histories");

router.get("/", find);
router.post("/", create);
router.get("/:id", findById);
router.patch("/:id", update);
router.delete('/:id', del);
module.exports = router;
