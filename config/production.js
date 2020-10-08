module.exports = {
  storage: {
    remote: {
      origin: {
        // Overrides the default location of the registry location.
        registryPath: '/widget-registry/production',
      },
    },
    filesystem: {
      // Configure where the compiled registry will be stored.
      destination: {
        directory: 'dist/widget-registry-boilerplate/widget-registry',
      },
    },
  },
};
