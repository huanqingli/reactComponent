# reactComponent
##adder
###demo:http://huanqingli.github.io/reactComponent/adder
总结、感受与坑：
第一个计数器每点击一次数字加一，是我在一个React教程网站看到的，当时自己点了100多下，自己就想做一个作为入门练习。最简单的组件，10分钟入门React的不错示例。
第二个计数器是我在第一个计数器上做的拓展，点击不同的按钮增加不同的值。父组件包含4
个子组件，那么第一个问题来了：**父组件与子组件之间的通讯**。父组件传值给子组件比较简单，直接在调用子组件时候加个props
就行了，子组件想传值给父组件还是费了点劲（新人轻喷）。这次采用的方法是直接把父组件的一个方程传给子组件，子组件传参进去并调用方程，修改了父组件相应的值，属于间接与父组件通信。关于父子组件通讯问题，也看到有前辈说调用子组件时给子组件一个ref,到时候直接抓住子组件的真实DOM并从中获取需要的值。
##autoEmailComlite
###demo:http://huanqingli.github.io/reactComponent/autoEmailComplite
总结、感受与坑：
想法起源于公司后台首页，登录时需要下拉列表自动补充三种公司邮箱，目前的处理方式是借用了前辈的jQuery插件，刚好在学react
，用它写个小组件练习一下。组件虽小，写的过程也是波澜起伏。首先，循环出来一个列表，第一次接触了
.map方法，其次，好多地方都要修改this的指向，不过这些都比较简单，真正的几个坑（对当时正在打字时候的我来说）：一个是在
.map方法里循环出来的元素节点上添加事件并且传递与这个元素相关的参数，找到了3种方法：
1.利用bind使用方法类似于call，只不过不会马上调用，会由事件触发调用，this指向不需要修改的话第一个参数为null即可。
2.给事件触发的函数传入参数event，在函数里使用event.target获取当前元素，再从中取需要的值。
3.粗暴的让事件等于一个匿名函数，在这个函数里再调用目标函数并传参。此时注意this指向问题。
做完了感觉就是：疑？这有什么难的？另一个是利用键盘操作去选择列表表中的元素，想了许久还是利用直接操作真实（解析好的）DOM
来解决了这个问题，应该有更好的方案，等以后接触到了再去修改吧。
还有一个小坑就是，失去焦点事件隐藏列表会导致无法在列表上添加点击事件，而在document上添加点击事件会避免这种情况（利用事件冒泡顺序）。
##backTopAndScrollBar
###demo:http://huanqingli.github.io/reactComponent/backTopAndScrollBar
总结、感受与坑：
个人网站从15年底就开始不再更新了，学的东西越多，越觉得之前写代码的越挫，准备16年底前上个全新的博客，老博客用的是纯原生JS
，用到的一些小工具也全是自己写的，没有任何外部的库。新博客准备用React和Webpack
等流行的库和工具。说了这么老多废话，其实就是重写个回到顶部的组件（之前的是原生写的）估计以后能用到。这个东西挺好写的，遇到了一些小波折：1
.关于页面滚动的东西，火狐容易和别人家不一样，得多注意点。2
.第一屏返回按钮隐藏，到第二屏以后再显示，监测滚动到哪了用啥事件呢，第一想法是鼠标滚轮，你往下翻肯定用滚轮啊。3. 新知识：设置组件样式的时候包在style={{}}里边。
做完了发现，我靠，回到顶部了按钮还没消失，因为我没动滚轮。。。这时又想到有人可能用键盘上下键控制甚至鼠标拉滚动条，滚轮事件再见。很自然的就发现了页面滚动事件，好自然啊，感觉都没想。3.回到顶部按钮倒是做好了，感觉不自然呢，奥，用户不知道自己在哪，，，还得做个模拟滚动条，好自然啊，感觉都没想。不说了，去做滚动条了。
再谈滚动条:1. 第二个加载的组件不起作用，排查一下是事件添加的问题，我白痴的把两个组件的事件分别用window
.onscroll添加了，终于彻头彻尾的意识到了addEventListener的必要性了。2. 复习了一下拖拽运动，别的倒是没啥坑了。