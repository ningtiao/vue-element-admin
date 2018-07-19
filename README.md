# vue-element-admin

技术栈 vue2.0 + elementUI +vuex + easy-mock + vue-router + es6         如果对你有帮助 请点右上角star，谢谢


# 概述
这两个月一直忙于公司的后台管理系统开发,现在准备把我司用到的一些组件抽离出来,在写我司项目之前,也看了各种文档,所以想抽离出来,写一个后台系统, 因为公司的项目还没结束,所以这个项目会在平时有时间继续完善功能。

目前数据采用easy-mock进行数据模拟, Easy Mock 是一个可视化，并且能快速生成 模拟数据 的持久化服务。 忘掉下面这些实用但麻烦的 Mock 方式吧。在你用了 Easy Mock 之后，你肯定会爱不释手的。具体用法请看api文档

访问： https://www.easy-mock.com/

![image](https://github.com/yjx-passion/vue-element-admin/blob/master/src/screenshots/easy-mock.png)


# 在线演示请点这里

[Preview]
[在线 Demo](http://yjx-passion.github.io/vue-element-admin/#/)
# 基于Vue2.0实现后台系统权限控制
本项目目前设置了两种管理员 1、admin 2、editor
每种类型的人看到的侧边栏不一样，可以进行的操作也不尽相同，于是就需要程序处理一下各个权限问题。

关于这个权限的控制 请看这边文章,说的都比较详情  [手摸手，带你用vue撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)

# 参考文档

请看这位大神：https://segmentfault.com/a/1190000009506097

这是我司的项目首页 效果如下：

在线体验功能：后续会把这个项目上线 敬请期待！
# 本项目部分截图预览

![image](https://github.com/yjx-passion/vue-element-admin/blob/master/src/screenshots/login.png)
![image](https://github.com/yjx-passion/vue-element-admin/blob/master/src/screenshots/table.png)

## Build Setup
  

``` bash
# install dependencies
npm install


如果 npm  install  出现问题  建议安装淘宝镜像

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build
```

如果对你有帮助 请点右上角star，谢谢


