---
slug: "/blog/react"
title: react入门 & 前端工程化实践
img: https://s2.loli.net/2022/01/12/goX84bTJzk1FGxY.jpg
category: frontend
date: 2021-1-12
---

> 讲述了React入门的一些注意事项。

# 简介

<img src="https://s2.loli.net/2022/01/12/goX84bTJzk1FGxY.jpg" alt="查看源图像" style="zoom:10%;" />

人类总是喜欢把简单的东西搞得复杂、把已经做好的东西重复造轮子，因此即使有了传统的HTML + CSS + JS，人类依然发明出了诸多前端框架。使用前端框架，我们可以更快更方便的开发出现代化的网页应用，并方便的与他人协作开发。

react前端框架中的佼佼者，它承担了创建视图层的功能，以JSX（一种在JavaScript里面写HTML的方式）来作为基本单位，构建出整个网页。

使用react，就需要接受一些与以往不同的思维方式。原先我们使用HTML + CSS + JS的开发方式，三个部分是独立编写的，当编写每一个部分时我们都只需要关注该部分的内容即可，如在HTML中创建格式、在CSS中调整样式等。这种“关注点分离”的方式虽然清楚（也因此有很多人更青睐于该种模式），但这种方式很多时候显得杂乱（三部分分开，所以三部分之间互相交流得通过全局唯一的id或需要自己命名的class等），也不利于复用。

react则说：“用JS就够了！”，将三者全部集中在JavaScript中，**写react，本质上是在写JavaScript代码**（所以最好先提升自己的JS水平）：

```javascript
const Test = () => {
    
    const handleClick = () => {
        console.log("clicked!")
    }
    
    return (<div 
                className="test" 
                style={{
                	color: 'red',
                	font-size: '100px',
            	}}>
        	Hello World!
            <button onClick={handleClick}>this is a button</button>
        </div>)
}
```

我们将这样一个组件作为基本单位，一个组件就是一个函数，但返回的是一段HTML代码，这段HTML代码中有一些CSS来表示其样式……

看起来很诡异，但真正使用后会觉得还蛮方便的。

因为react的组件是一个函数，而函数的作用是接受输入产生输出，所以我们可以将**由react编写的界面看作一个函数：通过接收到的`props`来产生`view`**：

```javascript
const Test = (props: {name: string}) => {
    const { name } = props;
    
    return (
    	<p style={{text-align: 'center'}}> {name} </p>
    )
}
```

# 前端工程化

> 为什么要把前端**工程“化”**？以前没有工程“化”么？工程“化”意味着什么？
>
> 早期的前端页面由JSP、PHP等在服务端生成，浏览器只负责展现，这个时候前端开发重度依赖开发环境，前后端职责纠缠不清（甚至没有前端概念），可维护性差。
>
> Ajax出现后，前端进入SPA（Single Page Application）时代，前后端开始分离，前端职责越来越清晰。
>
> 随着前端页面复杂性增加（功能、特效、数据等），前端出现了各种框架或者说工具库来满足快速构建前端应用需求，例如Backbone、AngularJS、React、Vue等，此时进入前端为主的MVC、MV*时代。
>
> 随着应用复杂性提高，应用对前端的要求也随之提高：开发、构建、渲染、维护性、扩展性等各方面都对前端提出了很高的要求。而随着Node.js兴起，各种用nodejs编写的前端工具如雨后春笋冒出来，前端面临的很多问题也都有了解决方案。
>
> React、Vue等工具聚焦于解决视图快速构建的问题，webpack聚焦于解决前端应用打包构建的问题，前端框架是包含前端开发各个链路在内的一整套前端开发解决方案，**前端工程**说的是从开发到部署线上再到后期迭代这一整个过程，而**前端工程化**说的则是从工程的角度管理前端开发，形成前端开发流程的一整套开发规范，提高前端开发效率。
>
> 所以，为什么前端要工程化？**为了提高前端开发效率，提高前端应用的可扩展性、可维护性等性能。**
>
> *引用自https://www.mengfansheng.com*

大家都喜欢python的原因，很大程度上是因为我们可以使用`pip`来安装别人写好的代码，然后在自己的python代码里面直接调用。在以Ctrl-C、Ctrl-V为基础的前端项目中，能够使用别人的代码当然更是重中之重，因此我们有了前端的包管理器；react终究是JavaScript代码，而我们最终需要的还是HTML，所以有了Webpack等打包工具……

这些工具构成了现代前端开发的流程。

## 工具链介绍

**如下推荐的工具链，每个人必须进行安装**；具有多个选项的，可以选择自己熟悉的进行安装。

* 包管理器：通过包管理器可以很方便的复用现有的JS库，同时也可用来创建项目、打包项目、配置环境变量等等：
    * 这里只推荐一个yarn：https://www.yarnpkg.cn/
* 构建工具：这个概念说起来比较复杂，因此只需要知道这个工具为我们提供了开发时的热重载，以及项目构建功能即可：
    * 这个也是只推荐一个，`Vue`的开发者尤雨溪写的`Vite`：https://cn.vitejs.dev/guide/
* 组件库：react写组件虽然很方便，但页面中每个小组件（按钮，进度条，etc.）都要自己写未免太折磨了，所以很多时候我们可以复用开源成熟的组件库：
    * 大家都很熟悉的Bootstrap：https://v4.bootcss.com/
    * 成熟方便的ant design（推荐）：https://ant.design/index-cn

# 参考资料

* （重点）react官方教程：https://beta.reactjs.org/learn
    * 习惯看视频的可以看视频教程：https://www.bilibili.com/video/BV1y4411Q7yH
* react hook非官方教程：https://github.com/puxiao/react-hook-tutorial
    * 作为参考资料。
* next.js官方文档：https://www.nextjs.cn/learn/basics/create-nextjs-app
    * next.js参考项目：https://github.com/seawind8888/Nobibi.git
* （可选）了解typescript：https://zhuanlan.zhihu.com/p/147765838

* （可选）了解Vue：https://v3.cn.vuejs.org/

# 所以，我该怎么做？

0. 调整好心态，不要畏难（更何况也并不难），以大家的水平而言很快的学会没有任何问题；

1. 首先，通读react的官方教程（虽然是英文的），完成里面给的例子，充分理解通过组件之间的组合来创建用户界面的思维模式；
2. 通过官方教程和hook非官方教程，大致理解hook的作用，掌握`useState`、`useEffect`等的用法，学会自己创建hook，但不必深究其细节，以后该踩的坑留待以后再踩；
3. 使用`create-react-app`做一个小的应用（比如TODO-list）等，对学习的知识进行简单应用；
4. 了解一些react项目中常用的项目模式，比如CSS Module的概念、使用`Redux`或`MobX`进行数据流管理，一些流行的`CSS-in-JS`方案（如`Tailwind`）等；
5. 查看next.js文档，熟悉相关用法，了解next.js的路由、API请求的实现方式，并初步了解服务端渲染等概念（但不必深入了解）；
6. 学习next.js参考项目，对于项目整体结构有大概概念：https://github.com/seawind8888/Nobibi.git；
7. 正式开始项目。

