/*
    发布订阅
        1.通过button.addEventListener('click',fn) 监听/订阅事件
        2.用户点击触发button.dispatchEvent(..."click") 执行 即触发事件
        3.fn被调用


    Obj对象只有三个属性
        addEventListener dispatchEvent removeEventListener
*/
// First
// class EventEmitter {
//     constructor() {
//         this.queue = []
//     }
//     addEventListener(fn) {
//         this.queue.push(fn)
//     }
//     removeEventListener(fn) {
//         const index = this.queue.indexOf(fn)
//         if (index < 0) { return }
//         this.queue.splice(index, 1)
//     }
//     dispatchEvent() {
//         this.queue.forEach(fn => fn())
//     }
// }

const { prototype } = require("node-polyfill-webpack-plugin")

// const obj = new EventEmitter()
// const fn = () => { console.log('hi'); }

// obj.addEventListener(fn)
// obj.addEventListener(fn)
// setTimeout(() => {
//     obj.dispatchEvent()

// }, 5000)

//Second  有名字
// class EventEmitter {
//     constructor() {
//         this.queue = {

//         }
//     }
//     addEventListener(name,fn) {
//         // 如果 this.queue[name] 为 undefined  就选择 ｜｜ 后的 
//         this.queue[name] = this.queue[name] || []
//         this.queue[name].push(fn)
//     }
//     removeEventListener(name,fn) {
//         if(this.queue[name] === undefined){return}
//         const index = this.queue[name].indexOf(fn)
//         if (index < 0) { return }
//         this.queue[name].splice(index, 1)
//     }
//     dispatchEvent(name) {
//         // if(this.queue[name] === undefined){return}
//         // ? 作用等同于 注释内容 if
//         this.queue[name]?.forEach(fn => fn())
//     }
// }

// const obj = new EventEmitter()
// const fn = () => { console.log('hi'); }
// const fn1 = () => { console.log('hello'); }

// obj.addEventListener("hello",fn)
// obj.addEventListener("hello",fn1)
// obj.removeEventListener("hello",fn1)
// setTimeout(() => {
//     obj.dispatchEvent("hello")

// }, 5000)

//Third 带参数函数
class EventEmitter {
    constructor() {
        this.queue = {

        }
    }
    addEventListener(name,fn) {
        // 如果 this.queue[name] 为 undefined  就选择 ｜｜ 后的 
        this.queue[name] = this.queue[name] || []
        this.queue[name].push(fn)
    }
    removeEventListener(name,fn) {
        if(this.queue[name] === undefined){return}
        const index = this.queue[name].indexOf(fn)
        if(index < 0) { return }
        this.queue[name].splice(index, 1)
    }
    dispatchEvent(name,...args) {
        // if(this.queue[name] === undefined){return}
        // ? 作用等同于 注释内容 if
        this.queue[name]?.forEach(fn => fn(...args))
    }
}

const obj = new EventEmitter()
const fn = (...args) => { console.log(args);console.log(...args); }
// [ 'let', 'fucking', 'go' ]
// let fucking go


obj.addEventListener("hello",fn)



setTimeout(() => {
    obj.dispatchEvent("hello","let","fucking","go")

}, 5000)

// 第四次直接  prototype  原型 但不建议 添加太多不
