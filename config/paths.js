const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
console.log('appDirectory:', appDirectory);
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  productDist: resolveApp('dist'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
};