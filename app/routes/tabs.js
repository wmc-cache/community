const Router = require("koa-router");
const router = new Router({ prefix: "/tabs" });
const { find, findById, create, update } = require("../controllers/tabs");

router.get("/", find);
router.post("/", create);
router.get("/:id", findById);
router.patch("/:id", update);

module.exports = router;
