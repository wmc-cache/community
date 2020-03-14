const Koa = require("koa");
const koabody = require("koa-body");
const koastatic = require("koa-static");
const error = require("koa-json-error"); //错误处理
const paramrter = require("koa-parameter"); //参数校验
const mongoose = require("mongoose");
const path = require("path");
const cors = require("koa2-cors");
const routing = require("./routes");
const app = new Koa();
const { connectionStr } = require("./config");

mongoose.connect(connectionStr, { useNewUrlParser: true }, () =>
  console.log("MongoDB连接成功了")
);
mongoose.connection.on("error", console.error);

app.use(cors());

app.use(koastatic(path.join(__dirname, "public")));

app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
  })
);

app.use(
  koabody({
    multipart: true, //启用文件
    formidable: {
      uploadDir: path.join(__dirname, "/public/uploads"),
      keepExtensions: true //包留扩展名
    }
  })
);

app.use(paramrter(app));

routing(app);

app.listen(3000, () => console.log("程序启动在 3000 端口"));
