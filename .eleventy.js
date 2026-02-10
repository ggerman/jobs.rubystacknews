module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("jobs", (collection) =>
    collection
      .getFilteredByGlob("src/jobs/*.md")
      .sort((a, b) => b.date - a.date)
  );

  return {
    pathPrefix: "/jobs.rubystacknews/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

