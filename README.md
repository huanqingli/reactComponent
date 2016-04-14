# reactComponent
##adder
###demo:http://huanqingli.github.io/reactComponent/adder
总结、感受与坑：
第一个计数器每点击一次数字加一，是我在一个React教程网站看到的，当时自己点了100多下，自己就想做一个作为入门练习。最简单的组件，10分钟入门React的不错示例。
第二个计数器是我在第一个计数器上做的拓展，点击不同的按钮增加不同的值。父组件包含4
个子组件，那么第一个问题来了：**父组件与子组件之间的通讯**。父组件传值给子组件比较简单，直接在调用子组件时候加个props
就行了，子组件想传值给父组件还是费了点劲（新人轻喷）。这次采用的方法是直接把父组件的一个方程传给子组件，子组件传参进去并调用方程，修改了父组件相应的值，属于间接与父组件通信。关于父子组件通讯问题，也看到有前辈说调用子组件时给子组件一个ref,到时候直接抓住子组件的真实DOM并从中获取需要的值。
##autoEmailComlite
###demo::http://huanqingli.github.io/reactComponent/autoEmailComplite
总结、感受与坑：
想法起源于公司后台首页，登录时需要下拉列表自动补充三种公司邮箱，借用了前辈的jQuery插件，刚好在学react
，用它写个小组件试试。组件虽小，写的过程也是波澜起伏。首先，循环出来一个列表，第一次接触了
.map方法，其次，好多地方都要修改this的指向，不过这些都比较简单，真正的几个坑（对当前的我来说）：一个是在
.map方法里循环出来的元素节点上添加事件并且传递与这个元素相关的参数，做完了感觉就是：疑？这有什么难的？另一个是利用键盘操作去选择列表表中的元素，想了许久还是利用直接操作真实DOM
来解决了这个问题，应该有更好的方案，等以后接触到了再去修改吧。
还有一个小坑就是，失去焦点事件隐藏列表会导致无法在列表上添加点击事件，而在document上添加点击事件会避免这种情况（利用事件冒泡顺序）。
