module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'article',
            // Target directory
            dirname: 'article',
            // Path of the `entry page` (or `list page`)
            path: '/',
            layout: 'HomePage',
            itemLayout: 'ArticleDetail',
            itemPermalink: '/:year/:month/:day/:slug',
            pagination: {
              layout: 'HomePage',
              perPagePosts: 10,
            }
          },
        ],
        frontmatters: [
          {
            id: "tags",
            keys: ['tags'],
            path: '/tags/',
            layout: 'Tags',  //defaults to `FrontmatterKey.vue`
            frontmatter: { title: '标签' },
            scopeLayout: 'HomePage' // Layout for matched pages.
          },
          {
            id: "dataCategories",         // 再 Vue 实例中的名称
            keys: ['dataCategories'], // YAML 中的KEY
            path: '/dataCategories/',
            layout: 'dataCategories',  //defaults to `FrontmatterKey.vue`
            frontmatter: { title: '时间收集' }
          },
          {
            id: "about",         // 再 Vue 实例中的名称
            keys: ['about'], // YAML 中的KEY
            path: '/about/',
            layout: 'about',  //defaults to `FrontmatterKey.vue`
            frontmatter: { title: '关于我' }
          }
        ]
      },
    ],
  ],
}