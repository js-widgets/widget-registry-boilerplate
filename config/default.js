const { deferConfig: defer } = require('config/defer');

module.exports = {
  // Compile only the widgets that changes from the version deployed into the remote storage.
  onlyCompileChanged:
    typeof process.env.WIDGET_REGISTRY_ONLY_CHANGED === 'undefined'
      ? true
      : process.env.WIDGET_REGISTRY_ONLY_CHANGED !== '0' &&
        process.env.WIDGET_REGISTRY_ONLY_CHANGED !== 'false',
  // Options related to where the full description of the registry is stored and made available to all the renderers.
  storage: {
    remote: {
      origin: {
        // Protocol and domain of the service that hosts the registry data.
        baseUrl: 'https://js-widgets.github.io',
        // The path within the server above where the registry is stored. Defaults to the sandbox value.
        registryPath: '/widget-registry-boilerplate/widget-registry/sandbox',
      },
      // By default the destination is the same as the origin, we overwrite the registry after compilation.
      destination: defer(function () {
        return this.storage.remote.origin;
      }),
    },
    filesystem: {
      // Configure where the compiled registry will be stored.
      destination: {
        directory: 'dist/widget-registry/sandbox',
      },
    },
  },
  // Configuration for the different plugin types.
  pluginConfig: {
    managerOptions: {
      discovery: {
        allowsContributed: true,
        rootPath: './node_modules/@js-widgets',
      }
    },
    // Options related to how the individual widget data is imported.
    ingestion: {
      // Plugin options:
      //   - ghReleases: uses the "repositoryUrl" and the "version" data from build/registry.json to find the release
      //     tarball containing the widget assets.
      //   - tarballUrl: uses the "tarballUrl" data from build/registry.json to find the tarball containing the
      //     widget assets.
      ghReleases: {
        // Authentication token for the GitHub API.
        apiKey: process.env.GITHUB_API_KEY,
        apiUrl: 'https://api.github.com',
        headers: {
          Authorization: defer(function () {
            return `token ${this.pluginConfig.ingestion.ghReleases.apiKey}`;
          }),
        },
      },
      tarballUrl: {
        // Additional headers to include in the request to download the tarball.
        headers: {},
      },
    },
  },
};
