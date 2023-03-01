// https://blog.csdn.net/m0_66333906/article/details/124036933  
// 1、中括号语法可以用变量作为属性名或者访问，而点语法不可以;
// 2、中括号语法可以用数字作为属性名，而点语法不可以;
// 3、中括号语法可以动态访问属性名，并且在程序运行时可以创建和修改属性，点语法不可以；
// 4、中括号语法可以在属性名中包含会导致语法错误的字符，如空格，也可以在属性名中包含关键字或者保留字；
// 5、在数组原型链上增加一个去重的方法，并实现链式调用。
/*
点操作符（.）: 静态的。

1、后面必须是一个以属性名命名的简单标识符；

2、标识符必须直接出现在js程序中，它们不是数据类型，因此程序无法修改它们。

中括号操作符（[]）: 动态的。

1、方括号里必须是一个计算结果为字符串的表达式，属性名通过字符串表示；

2、字符串是js的数据类型，在程序运行时可以修改和创建它们。

*/

const random = Math.floor(Math.random()*300000)
// undefined
const name = 'jsonp' + random  // 字符串 window[name]  字符串当key
// undefined
window.name = ()=>{console.log(1)}   // name 是key了
// ()=>{console.log(1)}
// window.name()
// VM870:1 Uncaught TypeError: window.name is not a function
//     at <anonymous>:1:8
// （匿名） @ VM870:1
window[name] = ()=>{console.log(1)}
// ()=>{console.log(1)}
window[name]
// ()=>{console.log(1)}
window[name]()
// VM931:1 1