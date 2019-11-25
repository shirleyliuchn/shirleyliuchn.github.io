module.exports = {
    title: "打卡程序媛(◕ᴗ◕✿)",
    description: 'THX DASHEN LDY',
    dest: 'dist',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['meta', {name: 'theme-color', content: '#FF66CC'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#FF66CC'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        huawei: false,
        themePicker: {
            colorName1: '#0033FF', // 极浓海蓝
            colorName2: '#8B00FF', // 紫罗兰色
            colorName3: '#00BFFF', // 深天蓝
            colorName4: '#FF8C00' // 暗橙
        },
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            }
        },
        logo: '/head.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        sidebarDepth: 1,
        displayAllHeaders: false,
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'ly',
        // 备案号
        record: '豫ICP备19920301号',
        // 项目开始时间
        startYear: '2019',
        /**
         * 密钥 (if your blog is private)
         */
        // keyPage: {
        //   keys: ['121023'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },
        nav: [
            {
                text: '在线文档',
                items: [
                    {text: 'Vue', link: 'https://cn.vuejs.org/v2/api/'},
                    {text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store'},
                    {text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845'},
                    {text: 'JQuery', link: 'https://www.jquery123.com/'},
                    {text: 'Bootstrap', link: 'http://www.runoob.com/bootstrap/bootstrap-tutorial.html'},
                ],
            },
            {
                text: '在线工具',
                items: [
                    {
                        text: '在线便捷', items: [
                            {text: 'PDF编辑器', link: 'https://smallpdf.com/cn/pdf-to-word'},
                            {text: 'JSON编辑器', link: 'https://www.bejson.com/jsoneditoronline'},
                            {
                                text: 'MD表格生成器',
                                link: 'https://tableconvert.com/?output=text&data=id%2C%20name%2C%20age%2C%20gender%0A1%2C%20Lawrence%2C%2039%2C%20M%0A2%2C%20Oliver%2C%2025%2C%20M%0A3%2C%20Roberta%2C%2017%2C%20F%0A4%2C%20Bamboo%2C%2070%2C%20F%0A'
                            },
                            {text: 'CRON表达式', link: 'http://cron.qqe2.com/'},
                            {text: '代码格式化', link: 'http://tool.oschina.net/codeformat/html'},
                            {text: '公式编辑器', link: 'https://zh.numberempire.com/latexequationeditor.php'},
                            {text: '二维码生成器', link: 'https://cli.im/'},
                            {text: '编码转换器', link: 'http://tool.chinaz.com/tools/native_ascii.aspx'},
                            {text: '配置文件转换器', link: 'http://www.toyaml.com/'},
                            {text: 'WEB学习', link: 'https://jsfiddle.net/'},
                            {text: 'MD编辑器', link: 'https://www.zybuluo.com/mdeditor'},
                            {text: 'HTMLTOMD', link: 'https://tool.lu/markdown/'},
                            {text: 'JSONTOGET', link: 'http://www.bejson.com/jsontools/json2get/'},
                        ]
                    },
                    {
                        text: '在线服务', items: [
                            {text: 'BOOT CDN', link: 'https://www.bootcdn.cn/'},
                            {text: '百度 CDN', link: 'http://cdn.code.baidu.com/'},
                            {text: '微信 CDN', link: 'http://qydev.weixin.qq.com/cdn/cdnjs.html'},
                            {text: '知道创宇云', link: 'https://www.yunaq.com/'},
                            {
                                text: '科大谷歌字体加速',
                                link: 'https://servers.ustclug.org/2014/06/blog-googlefonts-speedup/'
                            },
                            {text: 'tldr命令手册', link: 'https://tldr.ostera.io/'},
                        ]
                    },
                    {
                        text: '开源镜像', items: [
                            {text: 'OPSX', link: 'https://opsx.alibaba.com/'},
                            {text: 'AZURE', link: 'https://mirror.azure.cn/'},
                            {text: 'DOCKER HUB', link: 'https://hub.docker.com/'},
                        ]
                    },
                    {
                        text: '趋势分析', items: [
                            {text: '谷歌趋势', link: 'https://trends.google.com/trends/?geo=US'},
                            {text: '百度指数', link: 'http://index.baidu.com/#/'},
                            {text: '百度流量研究', link: 'https://tongji.baidu.com/data/browser'},
                        ]
                    },
                ]
            },
        ],
        friendLink: [
            {
                title: '有梦想的咸鱼',
                desc: '谁说咸鱼就一定没有梦想~',
                email: '1126176532@qq.com',
                link: 'https://blog.liudongyang.top'
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        sidebar: {
            '/zh/guide/': [
                {
                    title: '学习笔记',
                    collapsable: false,
                    children: [
                        ['', '开始'],
                        ['Markdown', 'Markdown'],
                    ]
                },
            ],
            '/zh/enjoy/': [
                {
                    title: '生活记录',
                    collapsable: false,
                    children: [
                        ['', '享受生活'],
                    ]
                },
            ],
            '/zh/diary/': [
                {
                    title: '我的日记',
                    collapsable: false,
                    children: [
                        ['', '个人日记'],
                    ]
                },
            ],
        },
        '/': {
            sidebar: 'auto'
        },
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        'flowchart',
        [
            require('./plugins/KanBanNiang'),
            {
                theme: ['blackCat'],
                width: 200,
                height: 470,
                modelStyle: {
                    position: 'fixed',
                    right: '110px',
                    bottom: '50px',
                    opacity: '0.9'
                },
                messageStyle: {
                    position: 'fixed',
                    right: '110px',
                    bottom: '370px'
                }
            }
        ],
        [
            require('./plugins/BgMusic'),
            {
                //这里自定义歌曲外链
                audios: [
                    {
                        name: '山楂树之恋',
                        artist: '程佳佳',
                        url: 'http://qiniu.liudongyang.top/%E7%A8%8B%E4%BD%B3%E4%BD%B3%20-%20%E5%B1%B1%E6%A5%82%E6%A0%91%E4%B9%8B%E6%81%8B.mp3',
                        cover: 'http://p2.music.126.net/G00sAe86sPi5gFQyuJHU7A==/109951164260611202.jpg'
                    },
                    {
                        name: '如果的事',
                        artist: 'superluckyqi',
                        url: 'http://qiniu.liudongyang.top/Superluckyqi%20-%20%E5%A6%82%E6%9E%9C%E7%9A%84%E4%BA%8B.mp3',
                        cover: 'http://p1.music.126.net/LoccG9kXgRD3pJR9UlsJMg==/109951164436801441.jpg'
                    },
                    {
                        name: '1000x',
                        artist: 'BROODS/Jarryd James',
                        url: 'http://qiniu.liudongyang.top/1000x.mp3',
                        cover: 'http://p1.music.126.net/5ktjajLDWPiC0oR6kmQJAQ==/3427177752470647.jpg'
                    },
                    {
                        name: '能够成家吗',
                        artist: '咖啡少年',
                        url: 'https://assets.smallsunnyfox.com/music/1.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
                    },
                    {
                        name: '江南地铁站4号出口',
                        artist: 'Plastic / Fallin` Dild',
                        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                    },
                    {
                        name: '用胳膊当枕头',
                        artist: '최낙타',
                        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
                    }
                ]
            }
        ]
        ,
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ]
    ]
};
