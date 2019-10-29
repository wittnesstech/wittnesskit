module.exports = {
  chainWebpack: config => {
    const rules = [
      { name: "images", dir: "img" },
      { name: "media", dir: "media" }
    ];
    rules.forEach(rule => {
      const ruleConf = config.module.rule(rule.name);

      ruleConf.uses.clear();

      ruleConf
        .use("file-loader")
        .loader("file-loader")
        .options({
          name: `${rule.dir}/[name].[hash:8].[ext]`
        });
    });
    devtool: "eval-source-map";
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  },
  pwa: {
    name: "WittNess Kit",
    themeColor: "#7F4DBA",
    msTileColor: "rgba(#490496, 0.7)"
  }
  //TODO tidyup this shit
  // configureWebpack: {
  //   devtool: "source-map"
  // }
};

// module.exports = {
//   chainWebpack: config => {
//     /* disable insertion of assets as data urls b/c Phaser doesn't support it */
//   },
//   devServer: {
//     open: true,
//     hot: false
//   }
// };
