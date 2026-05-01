module.exports = function (eleventyConfig) {
  // Add a passthrough copy for assets folder
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addWatchTarget('src/assets/');

  return {
    dir: {
      input: 'src', // Eleventy will look for content in 'eleventy/src'
      output: '_site',
      includes: '_includes',
      // This tells Eleventy to look for includes in 'eleventy/_includes'
      // (because '.' is the base for .eleventy.js, and _includes is directly there)
    },
    serverOptions: {
      host: '0.0.0.0',
      port: 8080,
    },
  };
};
