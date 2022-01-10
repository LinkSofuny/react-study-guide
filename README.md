# react-study-guide
:stuck_out_tongue_winking_eye:**React全家桶学习指南**， 通过**脑图**体系化地从JSX语法到令人痛疼的redux， 让react学习更加简单。 React文档对于刚入门的新人来说不是特别友好， 跳跃性强，并且Demo比较综合， 无法针对模块练习， 为了解决这一问题， 我重新整理了一份更直接简单的笔记， 帮助萌新高效地入门[React][React], 欢迎star:star::star:

***
个人社交主页:  <a href="https://www.zhihu.com/people/chen-yu-dong-83-17"><img src="https://github.com/LinkSofuny/vue-core-analyse/blob/dev/%20docs/images/zhihu.png" width="30"></a> <a href="https://juejin.cn/user/2005929448188567/posts"><img src="https://github.com/LinkSofuny/vue-core-analyse/blob/dev/%20docs/images/juejin.png" width="30"></a>
  
### 配套指南
[掘金: React入门指南][掘金文章]
### 说明
脑图中的每个分支,基本都对应着React中的每个功能, 并且针对这个功能,我都会配置一个极简的Demo只纯粹地让你懂得这个API的功能(如果真的特别简单的API, 我也只是介绍一下, 因为你看一眼也就懂了)


> **Why?**  首先当然是为了我自己也能够对这些常用的API烂熟于心, 其次代码是敲出来的, 只有这样你才能真正感受它的用处.

> **注:** 这个文档是为了地毯式地搜索自己对React不熟悉的地方, 为什么需要做到这个地步呢? :sunglasses:**当然是为了以后能够深窥React的源码, 理解他的精髓. 而踏入这一步前, 熟悉表层的React就非常重要了**, 倘若你也跟我一样希望以后能够深入React, 那也许这份文档会很适合你.


### 安装



```
$ git clone https://github.com/LinkSofuny/react-study-guide.git
```
```
$ cd react-study-guide
```
```
$ yarn start
```

### 使用

> **/study-demo** 下有一个 `src` 文件， 在`test-demo`中我存放了我写好的Demo方便你进行调试， 针对不同的Demo， 你只需要将带有`src_` 前缀地文件改名为`src` 然后替代 **/study-demo**中的src文件 启动项目即可运行我写好的demo

![指南.png][指南]

- 后期我会想办法通过webpack打包将这一步骤省略掉

## 脑图鸟瞰
> 放心，尽管脑图内容看起来繁多，但是都是经过整理的，只要你一个一个模块看下来肯定能够懂React每个功能的作用:blush:

![React.png][sumary]



### 项目目录
#### JSX语法
![JSX语法][JSX]
#### React组件化
![React组件化][React组件化]
#### React-Router
![React-Router][React-Router]
#### Redux
![Redux][Redux]
#### Hooks
![Hooks][Hooks]
#### 拓展
![拓展][拓展]






### 更新

- 2021/07/23 更新完React组件化与部分路由的Demo
- 2012/07/23 完成所有Demo与文档


# 感谢

这个项目是从我个人学习React的角度, 去教自己怎么学习React. 可能很多地方您觉得我一笔带过, 或是讲得不正确, 也希望您能提出来. 这也是我自己可能学习不到位的地方, **十分感谢, 您能看到这里:two_hearts:**

-------
[juejin]: https://juejin.cn/user/2005929448188567 "我的掘金"
[React]: https://react.docschina.org/ "React"
[sumary]: /readme-img/React.png "鸟瞰图"
[JSX]: /readme-img/JSX.png "JSX语法"
[React组件化]: /readme-img/React组件化.png "React组件化"
[React-Router]: /readme-img/React-Router.png "React-Router"
[Redux]: /readme-img/Redux.png "Redux"
[Hooks]: /readme-img/Hooks.png "Hooks"
[拓展]: /readme-img/拓展.png "拓展"
[指南]: /readme-img/指南.gif "指南"
[掘金文章]: https://juejin.cn/post/6990167248153346055 '文档指南'
