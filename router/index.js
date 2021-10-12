const Router = require("@koa/router");
const loader = require("./loader");
const path = require("path");
const router = new Router();

const getMethodRouter = (type) => {
  switch (type) {
    case "get": {
      return router.get.bind(router);
    }
    case "post": {
      return router.post.bind(router);
    }
    case "put": {
      return router.put.bind(router);
    }
    case "delete": {
      return router.del.bind(router);
    }
    default: {
      return router.all.bind(router);
    }
  }
};

let data = [];
loader("../config", (filename, file) => {
  if (!filename.startsWith("url")) {
    return;
  }
  if (typeof file !== "object" || !Array.isArray(file)) {
    throw "config下所有的文件都需要返回mock数组";
  }

  data = data.concat(file);
});

data.forEach((item) => {
  const fn = getMethodRouter(item.type);
  fn(item.url, (ctx, next) => {
    if (typeof item.result === "function") {
      ctx.body = item.result();
    } else {
      ctx.body = item.result;
    }
  });
});

module.exports = {
  router,
};
