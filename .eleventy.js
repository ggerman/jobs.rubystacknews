module.exports = function (eleventyConfig) {
  // Copiar assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Colección de jobs
  eleventyConfig.addCollection("jobs", (collection) =>
    collection
      .getFilteredByGlob("src/jobs/*.md")
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

