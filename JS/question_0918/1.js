//-1
const box = {a: 10, b: {c: 100}};
Object.freeze(box);
// box.a = 100;//----{ a: 10 }
// box.b.c = 1000;//{ a: 10, b: { c: 1000 } }
const box1 = box;
box1.a = 1000;
// box?  
const arr = [0, 1];
Object.freeze(arr);
arr[0] = 123;
console.log(arr);


//-2
// const {name: myName} = {name: 'lihua'}
// console.log(name);//name不存在  更名为myName

//-3
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    } else {
      const r = num + 10;
      cache[num] = r;
      return `calcul ${r}`;
    }
  }
}
//addFunc 是一个函数
const addFunc = add();
console.log(addFunc(10));//calcul 20
console.log(addFunc(10));//from cache 10
console.log(addFunc(2*5));//from cache 10


//-4
const arr4 = ['lihua', 'lilei'];
//for in 用在数组里是不对的 只能用在对象上
for (let item1 in arr4) {//枚举一个对象里的属性 arr4[0] => {'0': lihua', '1':lilei'}
  console.log(item1);// 0, 1
}
// for of 可以用在 数组、Map、Set、String...(可迭代对象)
for (let item2 of arr4) {//for of 可以用来遍历可迭代对象
  console.log(item2);// lihua lilei
}


//-5
var status = 'global';
var obj = {
  status: 'obj',
  getStatus: function() {
    return this.status;
  }
}
console.log(obj.getStatus());
var fun = obj.getStatus;
console.log(fun());
