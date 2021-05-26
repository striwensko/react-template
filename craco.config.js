// eslint-disable-next-line
const {ESLINT_MODES} = require("@craco/craco");

// eslint-disable-next-line no-undef
module.exports = {
  babel: {
    // / ...
    plugins: [
      // / ...
      [
        "@ladifire-opensource/babel-plugin-transform-stylex",
        {
          inject: true,
        },
      ],
    ],
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
