import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Kooboo开发指南",
  description: "A VitePress Site",
  ignoreDeadLinks: true,
  base: '/kooboo-dev-guide/',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/k-account.md' },
      { text: '开发指南', link: '/dev-guide/index.md' },

    ],

    sidebar: {
      '/dev-guide/': [
        {
          text: '开发指南',
          items: [

            {
              text: '基础篇', collapsed: false,
              items: [
                { text: 'tailwind的使用', link: '/dev-guide/basic/tailwind.md' },
              ]
            },
            {
              text: '实战篇', collapsed: true,
              items: [
                {
                  text: 'Kooboo-Vue环境搭建', link: '/dev-guide/practice/Vue-quickly/index.md',
                  collapsed: true,
                  items: [
                    { text: '公共组件引入', link: '/dev-guide/practice/Vue-quickly/common.md' },
                    { text: '创建Vue-app', link: '/dev-guide/practice/Vue-quickly/common-vue.md' },
                    { text: 'axios网络封装', link: '/dev-guide/practice/Vue-quickly/http.md' },
                    { text: 'Element-Plus使用', link: '/dev-guide/practice/Vue-quickly/element-plus.md' },
                    { text: '多语言解决方案', link: '/dev-guide/practice/Vue-quickly/i18n.md' },
                    { text: 'Vue-router使用', link: '/dev-guide/practice/Vue-quickly/vue-router.md' },
                    { text: 'pinia使用', link: '/dev-guide/practice/Vue-quickly/pinia.md' },
                    { text: '登录流程', link: '/dev-guide/practice/Vue-quickly/login.md' },
                  ]
                },
                { text: 'API 快速开发', link: '/dev-guide/practice/api-quick-development.md' },
                {
                  text: '邮件模板', collapsed: true,
                  items: [
                    { text: '邮件模板', link: '/dev-guide/practice/email-template.md' },
                  ]
                },
                {
                  text: 'webSocket实战', items: []
                },
                {
                  text: '图片处理实战', items: []
                },
                {
                  text: 'SEO 优化指南', items: []
                },
                {
                  text: '多语言解决方案', items: []
                },
                {
                  text: '拓展模块开发', items: []
                },
                {
                  text: '品牌页-子域名实现方案', items: []
                },
                {
                  text: '电商系统-Vue/服务端混合渲染', items: []
                }
              ]
            },
            {
              text: 'AI 快速开发指南 <span class="hot-badge">🔥 Hot</span>',
              items: [
                { text: 'Kooboo-CLI', link: '/dev-guide/ai/kooboo-cli.md' },
                { text: '站点同步助手', link: '/dev-guide/ai/site-import-helper.md' },
                { text: 'AI & kooboo 快速开发', link: '/dev-guide/ai/quick-development.md' },
              ]
            },

          ],

        }
      ],
      '/api/': [
        {
          text: 'KScript API',
          items: [
            { text: 'k.account', link: '/api/k-account.md' },
            { text: 'k.api', link: '/api/k-api.md' },
            { text: 'k.cache', link: '/api/k-cache.md' },
            { text: 'k.cookie', link: '/api/k-cookie.md' },
            { text: 'k.content', link: '/api/k-content.md' },
            {
              text: 'k.commerce', collapsed: false,
              items: [
                { text: 'product', link: '/api/k-commerce/product.md' },
              ]
            },
            { text: 'k.DB', link: '/api/k-DB.md' },
            { text: 'k.emailMarketing', link: '/api/k-emailMarketing.md' },
            { text: 'k.file', link: '/api/k-file.md' },
            { text: 'k.fromSite()', link: '/api/k-fromSite.md' },
            { text: 'k.inlineEditor', link: '/api/k-inlineEditor.md' },
            { text: 'k.label', link: '/api/k-label.md' },
            { text: 'k.logger', link: '/api/k-logger.md' },
            { text: 'k.mail', link: '/api/k-mail.md' },
            { text: 'k.market', link: '/api/k-market.md' },
            { text: 'k.module', link: '/api/k-module.md' },
            {
              text: 'k.net',
              link: '/api/k-net/index.md',
              items: [
                { text: 'k.net.DNS', link: '/api/k-net/DNS.md' },
                { text: 'k.net.IP', link: '/api/k-net/IP.md' },
                { text: 'k.net.url', link: '/api/k-net/url.md' },
                { text: 'k.net.webSocket', link: '/api/k-net/webSocket.md' },
              ]
            },
            { text: 'k.openApi', link: '/api/k-openApi.md' },
            { text: 'k.output', link: '/api/k-output.md' },
            { text: 'k.page', link: '/api/k-page.md' },
            { text: 'k.payment', link: '/api/k-payment.md' },
            { text: 'k.request', link: '/api/k-request.md' },
            { text: 'k.response', link: '/api/k-response.md' },
            { text: 'k.security', link: '/api/k-security.md' },
            { text: 'k.session', link: '/api/k-session.md' },
            {
              text: 'k.site', link: '/api/k-site/index.md',
              items: [
                { text: 'k.site.codes', link: '/api/k-site/codes.md' },
                { text: 'k.site.views', link: '/api/k-site/views.md' },
                { text: 'k.site.layouts', link: '/api/k-site/layouts.md' },
                { text: 'k.site.pages', link: '/api/k-site/pages.md' },
                { text: 'k.site.scripts', link: '/api/k-site/scripts.md' },
                { text: 'k.site.styles', link: '/api/k-site/styles.md' },
              ]
            },
            { text: 'k.state', link: '/api/k-state.md' },
            { text: 'k.storage', link: '/api/k-storage.md' },
            { text: 'k.template', link: '/api/k-template.md' },
            { text: 'k.userOptions', link: '/api/k-userOptions.md' },
            {
              text: 'k.utils',
              items: [
                {}
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      label: "页面导航",
      level: 'deep'
    },
    search: {
      provider: 'local'
    },
  },
  lastUpdated: true,
})
