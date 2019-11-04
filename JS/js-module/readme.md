## AMD
异步模块化的一个方案
代表作： Require.js
define 定义
require 引入


## CMD
代表作： Sea.js（玉伯）

共同点： 都能异步加载
区别： AMD会提升所有的require，  只要依赖了模块就会加载
      CDM会按照代码顺序致执行


## UMD （通用模块加载）
AMD + Common.js