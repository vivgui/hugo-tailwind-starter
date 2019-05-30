class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    require("tailwindcss")("assets/config/tailwind.config.js"),

    process.env.HUGO_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["layouts/**/*.html"],
          css: ["public/css/*.css"],
          whitelistPatterns: [],
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["html"]
            }
          ]
        })
      : null,

    require("autoprefixer")()
  ]
};
