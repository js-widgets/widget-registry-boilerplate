/**
 * @file
 * Script to prepare the new widget versions to be uploaded to the destination.
 */

// Modules.
const config = require('config');
const { mkdir } = require('fs');
const { ncp } = require('ncp');
const { resolve: resolvePath, join: joinPath } = require('path');
const { promisify } = require('util');
const rimraf = require('rimraf');

const compileWidgets = require('@js-widgets/compiler');
const copyP = promisify(ncp);
const mkdirP = promisify(mkdir);
const rimrafP = promisify(rimraf);

// Serialize the following options from the config file.
const rootDir = process.env.TRAVIS_BUILD_DIR || resolvePath(__dirname, '../..');
let options = {
  rootDir: rootDir,
  onlyCompileChanged: config.get('onlyCompileChanged'),
};
options = ['storage', 'pluginConfig'].reduce(
  (carry, propName) => ({
    ...carry,
    [propName]: config.util.toObject(config.get(propName)),
  }),
  options,
);

const distDir = joinPath(
  rootDir,
  options.storage.filesystem.destination.directory,
);
(async () => {
  try {
    // Delete the existing dist directory and re-create it.
    await rimrafP(distDir);
    await mkdirP(distDir, { recursive: true });

    // Copy all the files in the assets to the dist directory.
    await copyP(resolvePath('assets'), resolvePath(distDir));

    // Compile all the widgets and produce the registry.json.
    const message = await compileWidgets(options);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
})();
