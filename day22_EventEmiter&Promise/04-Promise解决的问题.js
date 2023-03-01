/*
    Promise
    解决的问题
        一种解决异步问题的通用方案
        没有回调低于 因为.then 不会一直缩进
        没有复杂事件 因为.then 只接受成功和失败两种情况
    本质
        Promise.prototype.then() 把成功函数和失败函数放入队列
        resolve() 调用成功函数 reject 调用失败函数
        根据成功或失败函数的返回值不同再去调用下一个成功或失败函数
*/
const promise1 = Promise.resolve(123);
promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});
