const config = require('config');
const downloadFile = require('../src/util/downloadFile');

const downloadPath = 'src/data/registry.json';
const baseUrl = config.get('storage.remote.origin.baseUrl');
const registryPath = config.get('storage.remote.origin.registryPath');
const originUrl = `${baseUrl}${registryPath}/registry.json`;

downloadFile(originUrl, downloadPath, false);
