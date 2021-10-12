const path = require("path");
const fs = require("fs");
function loader(dir, cb) {
  const url = path.resolve(__dirname, dir);
  const fileNames = fs.readdirSync(url);
  fileNames.forEach((filename) => {
    //去除后缀，成为model的list
    filename = filename.replace(".js", "");
    const file = require(`${url}/${filename}`);
    cb(filename, file);
  });
}

module.exports = loader;
