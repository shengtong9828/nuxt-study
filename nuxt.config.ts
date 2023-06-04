// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require("path");
export default defineNuxtConfig({
  modules: ["@vant/nuxt"],
  postcss: {
    plugins: {
      "postcss-pxtorem": {
        rootValue: 37.5,
        propList: ["*"],
        mediaQuery: false,
        exclude: "ignore",
      },
    },
  },
});
