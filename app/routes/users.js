const Router = require("koa-router");
const jwt = require("koa-jwt");
const router = new Router({ prefix: "/users" });

const {
  find,
  findById,
  create,
  checkOwner,
  login,
  update,
  delete: del,
  listFollowing,
  listFollowers,
  checkUserExist,
  follow,
  unfollow,
  listQuestions
} = require("../controllers/users");

const { secret } = require("../config");

const auth = jwt({ secret });

router.get("/", find);

router.post("/", create);

router.get("/:id", findById);

router.patch("/:id", auth, checkOwner, update);

router.delete("/:id", auth, checkOwner, del);

router.post("/login", login);

router.get("/:id/following", listFollowing);

router.get("/:id/followers", listFollowers);

router.put("/following/:id", auth, checkUserExist, follow);

router.delete("/following/:id", auth, checkUserExist, unfollow);

router.get("/:id/questions", listQuestions);

module.exports = router;
