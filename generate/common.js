const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const resolvePath = (...file) => path.resolve(__dirname, ...file);
const log = message => console.log(chalk.green(`${message}`));
const successLog = message => console.log(chalk.blue(`${message}`));
const errorLog = error => console.log(chalk.red(`${error}`));

module.exports = {
  generateFile: (path, data) => {
    if (fs.existsSync(path)) {
      errorLog(`${path}文件已存在`);
      return;
    }
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, "utf8", err => {
        if (err) {
          errorLog(err.message);
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  },
  path: path,
  chalk: chalk,
  fs: fs,
  log: log,
  successLog: successLog,
  errorLog: errorLog,
  resolvePath: resolvePath,
  parseTime: (time, cFormat) => {
    if (arguments.length === 0) {
      return null;
    }
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
      date = time;
    } else {
      if (("" + time).length === 10) time = parseInt(time) * 1000;
      date = new Date(time);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key];
      if (key === "a")
        return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
      if (result.length > 0 && value < 10) {
        value = "0" + value;
      }
      return value || 0;
    });
    return time_str;
  }
};
