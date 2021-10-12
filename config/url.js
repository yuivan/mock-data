const URLS = [];
const addUrls = (data) => {
  URLS.push(data);
};
addUrls({ type: "get", url: "/second", result: { code: "0", data: "second" } });
module.exports = URLS;
