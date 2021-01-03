const downloadFile = require('./downloadFile');

/**
 * Custom webpack plugin to ensure the widget data is bundled statically at compile time.
 *
 * @type {module.DownloadFilePlugin}
 */
module.exports = class DownloadFilePlugin {
  constructor(options) {
    this.options = options || {
      forceDownload: false,
      downloadPath: 'src/data/registry.json',
      originUrl: '',
    };
  }

  apply(compiler) {
    const { originUrl, downloadPath, forceDownload } = this.options;
    downloadFile(originUrl, downloadPath, forceDownload);
  }
};
