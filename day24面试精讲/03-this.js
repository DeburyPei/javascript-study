// https://juejin.cn/post/6844904083707396109

"use strict";   // 加了use strict  所以this是undefined  不是window
var a = 10;
function foo () {
  console.log('this1', this)
  console.log(window.a)
  console.log(this.a)
}
console.log(window.foo)
console.log('this2', this)
foo();


// var  会绑定到 window上 比如 var a = 1 即 window.a 是 1
// let 或者 const 变量是不会绑定到window上的 所以此时打印出三个undefied
let a = 10
const b = 20

function foo () {
  console.log(this.a)  // window.a  undefined
  console.log(this.b)   // window.b  undefinebd
}
foo();
console.log(window.a) // window.a  undefined


// this.a 
var a = 1
function foo() {
  var a = 2
  function inner () { 
    console.log(this.a)
  }
  inner() // this === window  只看调用形式 还是window
}

foo() // 1


// obj === this
function foo () {
  console.log(this.a)
}
var obj = { a: 1, foo }  
var a = 2
obj.foo()  // 1


function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;  //函数地址一样 this还是

obj.foo();  // 1
foo2();   // 2


function foo () {
  console.log(this.a)   // window.a  2
}
function doFoo (fn) {
  console.log(this)  // window
  fn()//foo  this
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo)

//
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this) // obj2
  fn()              // 2
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)

//
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()           //2
foo.call(obj)   //1
foo.apply(obj)  //1
foo.bind(obj)   //不调用 不执行

// setTimeout 非严格状态下 this是window 严格是undefined
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1()
obj2.foo2()
2
// 2
// Window 
// 3



//
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }.call(obj1), 0)
  }
}
var a = 3
obj2.foo1()
obj2.foo2()

// 2
// { a: 1 }
// 1


// foo() 返回undefined
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)  // undefined.call(obj)


//
function foo () {
  console.log(this.a)  // obj.a
  return function () {
    console.log(this.a)  // window.a
  }
}
var obj = { a: 1 }
var a = 2

foo.call(obj)()
//  1
//  2

//
var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
var a = 'window'
var obj2 = { a: 'obj2' }

obj.foo()()// foo:obj inner:window
obj.foo.call(obj2)()// foo:obj2 inner:window
obj.foo().call(obj2)//foo:obj inner:obj2



//
var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a  3
    return function (c) {
      console.log(this.a + b + c) 
    }
  }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1) // 6 3 + 2 +1
obj.foo.call(obj2)(1)   // 6  2 + 3 + 1


// filter(callbackFn,thisArg)  第二个参数是第一个参数的this
function foo (item) {
  console.log(item, this.a)
}
var obj = {
  a: 'obj'
}
var a = 'window'
var arr = [1, 2, 3]

// arr.forEach(foo, obj)
// arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a)
  return i > 2
}, obj)

// 1 "obj"
// 2 "obj"
// 3 "obj"

//箭头函数  找外面一层作用域的this
var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1()
obj.foo2()()

// 'window'
// 'obj'
// 'obj'

