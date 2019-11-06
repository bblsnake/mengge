## 帧
刷新 60Hz
60次 / 1000ms   16.666ms/ 一次

## 
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染
1. JS
2. http请求
3. 定时器
4. 事件
5. 页面绘制布局

js和 页面绘制布局 是互斥的，因为js可以改变dom

## event loop
MacroTask(宏任务)： 同步代码 setTimeout setInterval
MicroTask(微任务):  Promise.then nextTick

宏任务 -> 微任务 -> 渲染  宏任务 -> 微任务 -> 渲染  宏任务 -> 渲染 