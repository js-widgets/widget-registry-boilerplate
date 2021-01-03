const { createWriteStream, stat } = require('fs');
const { get: httpsGet } = require('https');
const { join: joinPath, resolve: resolvePath } = require('path');
const { promisify } = require('util');

const statP = promisify(stat);

module.exports = async (originUrl, downloadPath, forceDownload = false) => {
  const filename = joinPath(resolvePath(__dirname, '../..'), downloadPath);
  if (!forceDownload) {
    try {
      // If the file already exists, avoid downloading it.
      await statP(filename);
      console.log(`⚠ File "${filename}" already exists.`);
      console.log('Delete the file and run again to re-download.');
      return;
    } catch (e) {}
  }
  const fileDestination = createWriteStream(filename);
  console.log(`⏬ Downloading "${originUrl}" ⏳`);
  httpsGet(originUrl, (res) => {
    res
      .on('data', (data) => fileDestination.write(data))
      .on('end', () => {
        fileDestination.end();
        console.log(`🏁 File downloaded to "${filename}".`);
      });
  });
};
