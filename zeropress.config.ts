import { UserConfig } from "zeropress";

const config: UserConfig = {
  themeConfig: {
    nav: [
      {
        img: "/logo.jpg",
        link: "/",
        position: "left",
      },
      {
        dark: true,
      },
      {
        logo: "github",
        link: "https://github.com/houhongxu/hhxpress",
      },
    ],
    lastUpdated: {
      text: "最后更新于：",
      format: "YYYY-MM-DD",
    },
    editLink: {
      // 需要更换为自己仓库路径
      pattern: "https://github.com/houhongxu/site/edit/master/docs/:path",
      text: "编辑",
    },
  },
};

export default config;
