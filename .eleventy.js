const Image = require('@11ty/eleventy-img');
const path = require('path');

module.exports = function (eleventyConfig) {
  // 1. Keep your existing passthrough for non-processed assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/admin');
  // Inside your module.exports function:
  eleventyConfig.addPassthroughCopy('src/assets/js');

  // 2. Add the Responsive Image Shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    'image',
    async function (src, alt, sizes = '100vw') {
      // Correct the path since your input is 'src'
      let fullSrc = path.join(__dirname, 'src', src);

      let metadata = await Image(fullSrc, {
        widths: [400, 800, 1200],
        formats: ['webp', 'jpeg'],
        outputDir: './_site/img/', // Put processed images in the output folder
        urlPath: '/img/',
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
      };

      return Image.generateHTML(metadata, imageAttributes);
    },
  );

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
