const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  title: "戒晨-博客",
  description: "夜半三更是戒晨",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
      }
    ],
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `./favicon.ico` }
    ],
    [
      "link",
      {
        href: "https://cdn.jsdelivr.net/npm/reset.css@2.0.2/reset.min.css",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href:
          "//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href:
          "//fonts.googleapis.com/css?family=Noto+Serif:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",
        rel: "stylesheet"
      }
    ]
  ],
  themeConfig: {
    homecover:
      "https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/index.jpg",
    typer: [
      "我是一个FE闲鱼",
      "一个PPT爱好者",
      "一个MG动画爱好者",
      "宅是我的灵魂"
    ],
    profilePhoto:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606397617540&di=fe231361d2bd20cf5563645053ac3b67&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201911%2F17%2F20191117234615_ofqxh.thumb.700_0.jpg"
  }
};
