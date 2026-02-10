module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("jobs", (collection) =>
    collection.getFilteredByGlob("jobs/*.md").sort((a, b) => {
      return b.date - a.date;
    })
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

