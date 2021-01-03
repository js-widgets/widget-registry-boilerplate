const config = require('config');
const DownloadFilePlugin = require('./src/util/DownloadFilePlugin');

module.exports = {
  webpack: {
    configure: {
      plugins: [
        new DownloadFilePlugin({
          forceDownload: false,
          downloadPath: 'src/data/registry.json',
          originUrl: `${config.get('storage.remote.origin.baseUrl')}${config.get(
            'storage.remote.origin.registryPath',
          )}/registry.json`,
        }),
      ],
    },
  },
};
