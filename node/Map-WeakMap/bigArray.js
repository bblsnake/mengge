console.log(process.memoryUsage());// 0

let array = new Array(5 * 1024 * 1024);// 1

console.log(process.memoryUsage());
array = null;// 0
global.gc();
console.log(process.memoryUsage());
