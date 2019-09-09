module.exports = {
  configureWebpack: config => {
    devtool: "eval-source-map";
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  },
  pwa: {
    name: "WittNess Kit",
    themeColor: "#7F4DBA",
    msTileColor: "rgba(#490496, 0.7)"
  },
  //TODO tidyup this shit
  configureWebpack: {
    devtool: "source-map"
  }
};
