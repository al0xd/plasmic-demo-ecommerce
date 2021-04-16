
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['tskKM7gWsfxPWKdeF2whbc'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  