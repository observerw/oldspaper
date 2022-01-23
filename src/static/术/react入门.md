---
title: react入门 & 前端工程化实践
category: tech
slug: react-introduction
date: 2021-1-12
img: pics.asset/goX84bTJzk1FGxY.jpg
---

> 讲述了React入门的一些注意事项。
>
> <!-- end -->

# 简介

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

# 示例：TODO app

<img src="pics.asset/image-20220118183808158.png" alt="image-20220118183808158" style="zoom:50%;" />

首先分析需要有哪些部分。我们可以粗略的将上图的TODO list分为两个部分：添加新的条目的输入框，与现有TODO项的展示：

```jsx
export default () => {
    const [todos, setTodos] = useState<IItemInfo[]>([
        {
            id: '1',
            title: 'first'
        }
    ]);

    // 删除某些列表项
    const handleDelete = (ids: string[]) => {
        setTodos(todos.filter(todo => !ids.includes(todo.id)));
    }
	
    // 增加某个列表项
    const handleAdd = (info: IItemInfo) => {
        setTodos([...todos, info]);
    }

    return <div className='...'>
        <h1 className='text-5xl font-bold'>TODO list</h1>
        <AddTodo onAdd={handleAdd} />   {/* 输入框 */}
        <Board todos={todos} onDelete={handleDelete} /> {/* 列表 */}
    </div>
}
```

然后考虑这些组件之间的数据流的结构。应该遵守两个原则：

1. **如果两个兄弟组件之间需要共同管理某些信息，则应该把这些信息提取到它们共同的父亲那里，由父亲来告诉它们这些信息；**
2. **父组件向子组件传递信息靠props，子组件向父组件传递信息靠回调函数。**

> 小trick：父组件向子组件传递的回调函数一般叫`handleXXX`，而子组件接收父组件回调的prop一般叫`onXXX`。

在这个例子中，`AddTodo`和`Board`是一对兄弟，其中`AddTodo`添加TODO项而`Board`展示TODO项，所以将TODO信息列表`todos`提取到最顶层组件中。



先看`AddTodo`的实现。输入部分的主体为一个输入框和一个按钮。我们设置了一个状态`title`，与输入框进行双向绑定，当按下按钮时，我们将当前的`title`通过父组件提供的`onAdd`函数传递到父亲那里。

> 小trick：这里的id为了省事而使用了当前的时间戳，但如果你手速够快，可能会出现bug。所以可以用`uuid`等库生成全局唯一的ID。

```jsx
const AddTodo: React.FC<{
    onAdd: (info: IItemInfo) => void
}> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        if (title) {
            onAdd({ id: new Date().getTime().toString(), title: title, })
            setTitle('')
        }
    }

    return <Space>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <Button type='primary' onClick={handleSubmit}>添加</Button>
    </Space>
}
```



接下来看`board`。`board`本身是一个展板，其中包含着若干个列表项`Item`。

先考虑一下一个列表项有哪些状态是需要维护的：

* 该列表项是否已经完成；
* 该列表项是否被选中。

然后考虑都有谁能操作这些状态：

* `board`能够通过选中多个列表项来批量删除/标记为完成；
* 列表项本身能够将自己删除或将自己标记为完成。

注意到`board`和列表项自己都能够操作列表项的状态，所以**只能将这些状态维护在`board`里，而不是每个组件内部**。因此我们在`board`内部有两个`state`：`finished`和`selected`，用于存储所有处于这个状态的列表项的ID。

然后考虑`board`和列表项之间的信息传递方式。刚才咱们说了父向子用props，子向父用回调，所以需要在`board`里面将需要给每个列表项的回调准备好：

`handleItemDelete`，`handleItemSelect`，`handleItemFinish`，以及`Finished`和`Selected`值的传递：

```js
selected={selected.includes(info.id)} 
finished=true
```

通过这种麻烦的方式，咱们就可以实现了`Finished`和`Selected`两个状态的双向绑定。

列表项实现：

```jsx
interface IItemInfo {
    id: string,
    title: string,
}

const Item: React.FC<{
    info: IItemInfo,
    selected: boolean,
    finished?: boolean,
    onSelect: (id: string, isSelect: boolean) => void,
    onDelete: (id: string) => void,
    onFinish: (id: string) => void,
}> = ({ info, selected, finished = false, onSelect, onDelete, onFinish }) => {
    const { title, id } = info;
    return <div className='...'>
        {/* 偷懒借用了一下antd的CheckBox */}
        <Checkbox checked={selected} style={{
            textDecoration: finished ? 'line-through' : 'none',
        }}
            className='flex items-center w-36'
            onChange={e => onSelect(id, e.target.checked)} >
            {title}
        </Checkbox>
        <Space>
            <Button onClick={() => { onDelete(id) }}>删除</Button>
            <Button onClick={() => { onFinish(id) }}>完成</Button>
        </Space>
    </div>
}
```

`Board`实现：

```jsx
const Board: React.FC<{
    todos: IItemInfo[],
    onDelete: (id: string[]) => void,
}> = ({ todos, onDelete }) => {
    // 当前选中的列表项的ID
    const [selected, setSelected] = useState<string[]>([]);
    // 已经完成的列表项的ID
    const [finished, setFinished] = useState<string[]>([]);

    // 通过finished和todos的ID集合，计算出完成和未完成的列表项
    const unfinishedTodos = todos.filter(todo => !finished.includes(todo.id));
    const finishedTodos = todos.filter(todo => finished.includes(todo.id));


    // 删除某些列表项（父组件自己用）
    const handleDelete = (ids: string[]) => {
        onDelete(ids);
        setSelected([]);
        setFinished(finished => finished.filter(id => !ids.includes(id)));
    }

    // 删除某个列表项（传递给子组件）
    const handleItemDelete = (id: string) => {
        onDelete([id]);
        setSelected(selected.filter(item => item !== id));
        setFinished(finished.filter(item => item !== id));
    }

    // 标记若干列表项为已完成（父组件自己用）
    const handleFinish = (ids: string[]) => {
        setSelected([]);
        setFinished(finished => [...finished, ...ids]);
    }

    // 标记某个列表项为已完成（传递给子组件）
    const handleItemFinish = (id: string) => {
        setFinished(finished => [...finished, id]);
    }

    // 选中某个列表项（传递给子组件）
    const handleItemSelect = (id: string, isSelect: boolean) => {
        if (isSelect) {
            setSelected([...selected, id])
        } else {
            setSelected(selected.filter(item => item !== id))
        }
    }

    return <div className='flex flex-col items-center w-full h-full relative'>
        <p className='text-xl m-2'>未完成</p>
        {
            // 根据列表渲染出列表项
            unfinishedTodos
                .map((info) => {
                    return <Item
                        key={info.id} info={info} 
                        // 当前列表项是否选中，根据其ID是否在selected中来决定
                        selected={selected.includes(info.id)}
                        onSelect={handleItemSelect}
                        onDelete={handleItemDelete}
                        onFinish={handleItemFinish} />
                })
        }
        <p className='text-xl m-2'>已完成</p>
        {
            finishedTodos
                .map((info) => {
                    return <Item
                        key={info.id} info={info} 
                        selected={selected.includes(info.id)} finished
                        onSelect={handleItemSelect}
                        onDelete={handleItemDelete}
                        onFinish={handleItemFinish} />
                })
        }
        <Space>
            <Button danger
                disabled={selected.length === 0}
                onClick={() => { handleDelete(selected) }}>删除</Button>
            <Button type='primary'
                disabled={selected.length === 0}
                onClick={() => { handleFinish(selected) }}>完成</Button>
        </Space>
    </div>
}
```

> 代码在https://gitee.com/observerw/react-tutorial 中。

