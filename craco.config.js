const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  // Disable type-checking when building the final asset, as we perform type-checking in
  // CI instead. Worth noting this is valuable because type-checking is the most
  // expensive part of the build.
  typescript: {
    enableTypeChecking: false,
  },
  // Disable eslint too- we check this in CI, not as part of the build.
  eslint: {
    enable: false,
  },
  jest: {
    configure: {
      globals: {
        CONFIG: true,
      },
    },
  },
};
