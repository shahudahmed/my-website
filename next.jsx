// next.config.cjs
console.log('DEBUG: next.config.cjs loaded!');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};
