## 介绍

这是一个 VuePress 搭建的个人博客

## 如何使用

``` bash
# 1. 首先拷贝该项目
git clone https://github.com/shirleyliuchn/shirleyliuchn.github.io.git

# 2. 安装依赖
yarn

# 3. 本地运行查看(在运行前请先进行相关配置)
yarn dev

# 4. 部署 (docs分支代码提交后 自动部署到master分支 远程github的actions CI集成)
git push 
```

## 注意事项

* 提交代码前最好保证yarn dev执行后没有报错

* config.js文件中有配置注解 可以对照配置

* 最好不要提交过大文件 例如音乐视频等 引入外链时防止跨域
