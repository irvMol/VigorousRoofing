module.exports = function (eleventyConfig) {
  // Since 'input' is 'src', just use 'assets'
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addWatchTarget('assets/');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    serverOptions: {
      host: '0.0.0.0',
      port: 8080,
    },
  };
};
