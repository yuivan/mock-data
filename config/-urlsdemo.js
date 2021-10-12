const URLS = [];
let data = 0;
const addUrls = (data) => {
  URLS.push(data);
};

addUrls({ type: "get", url: "/users", result: { code: "0", data: "getUser" } });
addUrls({
  type: "get",
  url: "/api/users",
  result: { code: "0", data: { name: 123 } },
});
addUrls({
  type: "post",
  url: "/users",
  result: { code: "0", data: "postUser" },
});
addUrls({ type: "put", url: "/users", result: { code: "0", data: "putUser" } });
addUrls({
  type: "delete",
  url: "/users",
  result: { code: "0", data: "deleteUser" },
});
addUrls({
  type: "get",
  url: "/users2",
  result: () => {
    data++;
    return { code: "0", data };
  },
});
module.exports = URLS;
