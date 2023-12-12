import { Page, defineUserConfig } from 'vuepress'
import { autoLayoutsPlugin } from './@plugin/auto-layouts';
import { homePagePlugin } from './@plugin/home-page';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { GitContributor, GitData, gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { blogPlugin } from "vuepress-plugin-blog2";
import { giscusCommentPlugin } from './@plugin/giscus-comment';

const hostName = 'jjaw.cn';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '神奇小破站',
    description: '分享有意思的东西',
    public: `${__dirname}/public`,
    pagePatterns: [
        "./articles/**/*.md"
    ],
    markdown: {
        toc: {
            level: [2, 3, 4]
        },
        headers: {
            level: [2, 3, 4]
        }
    },
    shouldPrefetch: false,
    /**
     * 不需要主题awa，空主题就ok
     */
    theme: { name: "jjaw-cn-page" },
    plugins: [
        /**
         * 自动注册布局
         * 自己瞎写的 ./@plugin/auto-layouts
         */
        autoLayoutsPlugin(`${__dirname}/@layouts`),
        /**
         * 主页面插件
         * 自己瞎写的 ./@plugin/home-page
         */
        homePagePlugin({
            path: "/",
            frontmatter: {
                layout: "HomePage",
                description: "分享有意思的东西！java web 前端 网络 vue JavaScript JS TS TypeScript css H5"
            }
        }),
        /**
         * 自动注册全局组件
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html
         */
        registerComponentsPlugin({
            componentsDir: `${__dirname}/@tags`
        }),
        /**
         * 切换页面显示进度条
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/nprogress.html
         */
        nprogressPlugin(),
        /**
         * 代码语法高亮
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/prismjs.html
         */
        prismjsPlugin({
            preloadLanguages: []
        }),
        /**
         * 获取git信息
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html
         */
        gitPlugin(),
        /**
         * 自动生成目录
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/toc.html
         */
        tocPlugin(),
        /**
         * 页面滚动自动定位hash
         * https://v2.vuepress.vuejs.org/zh/reference/plugin/active-header-links.html
         */
        activeHeaderLinksPlugin({
            headerLinkSelector: ".vuepress-toc-link",
            headerAnchorSelector: ".header-anchor"
        }),
        /**
         * Markdown 增强
         * https://plugin-md-enhance.vuejs.press/zh/
         */
        mdEnhancePlugin({
            //开启组件
            component: true,
        }),
        /**
         * sitemap生成
         * https://plugin-sitemap2.vuejs.press/zh/
         */
        sitemapPlugin({
            hostname: hostName,
            changefreq: "monthly"
        }),
        /**
         * eco 搜索引擎优化
         * https://plugin-seo2.vuejs.press/zh/
         */
        seoPlugin({
            hostname: hostName,
            isArticle: (page) => {
                return page.filePath?.startsWith(`${__dirname}/articles/`) ? true : false;
            }
        }),
        /**
         * 博客插件 列表 分类 标签
         * https://plugin-blog2.vuejs.press/
         */
        blogPlugin({
            getInfo(page) {
                return {
                    git: getGitInfo(page),
                    title: page.frontmatter.title || page.title,
                    description: page.frontmatter.description
                }
            },
            filter: (page) => {
                return page.filePath?.startsWith(`${__dirname}/articles/`) ? true : false;
            },
            type: [
                {
                    key: "stars",
                    filter({ frontmatter }) { return frontmatter.star ? true : false },
                    sorter(pa, pb) {
                        const ta = pa.data["git"]?.updatedTime || 0;
                        const tb = pb.data["git"]?.updatedTime || 0;
                        return tb - ta;
                    }
                }
            ],
            category: [{
                key: "tags",
                path: "/tags/",
                layout: "Tags",
                frontmatter(localePath){
                    return {
                        title: "标签页",
                        description: "通过标签浏览文章列表."
                    }
                },
                itemPath: "/tags/:name/",
                itemLayout: "Tags",
                itemFrontmatter(name, localePath) {
                    return {
                        title: `${name}标签`,
                        description: `${name}标签的所有文章`
                    }
                },
                getter(page) {
                    const tags = page.data.frontmatter["tags"];
                    if (Array.isArray(tags)) {
                        return tags;
                    }
                    if ((typeof tags) == 'string') {
                        return [tags]
                    }
                    return [];
                },
                sorter(pa, pb) {
                    const ta = pa.data["git"]?.updatedTime || 0;
                    const tb = pb.data["git"]?.updatedTime || 0;
                    return tb - ta;
                }
            }]
        }),
        /**
         * 评论区插件
         * 注册一个全局异步GiscusComment组件
         * 自己瞎写的 ./@plugin/giscus-comment
         */
        giscusCommentPlugin({
            repo:"用户名/查看名",
            repoId:"查看id",
            mapping:"pathname" ,
        }),
    ]
});



function getGitInfo(page: Page) {
    const git = page.data["git"] as GitData | undefined;
    if (!git) {
        return undefined;
    }
    let commitMaxPerson: GitContributor | undefined = undefined;
    if (git.contributors && git.contributors.length > 0) {
        commitMaxPerson = git.contributors.sort((a, b) => b.commits - a.commits)[0];
    }
    let updatedTime = git.updatedTime;
    return {
        commitMaxPerson,//获取git提交最多的人
        updatedTime,//文章的更新时间
    }
}