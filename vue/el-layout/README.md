## 
<template>
  <div>
  </div>
</template>

里面的东西 都会被编译为 h('div', {属性（id：""...）}, [children])  
babel.io

h函数的返回
一个对象{
  详细描述了该标签上(<div/><component>)的信息:props,id,class,子节点
}
虚拟节点（virtual node）Vnode
虚拟DOM ：Vnode 建立起来的一个树