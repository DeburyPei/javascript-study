//将n 设置 全局 或者外部全局接收n

/*
// let m 
const 摇色子 = ()=>{
    setTimeout(()=>{
        const n = Math.floor(Math.random()*6)+1
        console.log(`点数为${n}`)
        // m = n
        window.n =  n
    },3000)
    // return undefined
}

console.log(1)
const result = 摇色子()  // result === undefined
setTimeout(()=>{
console.log(window.n)

},3000)

console.log(2)
 */

// const 摇色子 = ()=>{
//     setTimeout(()=>{
//         const n = Math.floor(Math.random()*6)+1
//         console.log(`点数为${n}`)
//         // m = n
//         window.n =  n
//     },Math.random()*1000)
//     // return undefined
// }

// console.log(1)
// const result = 摇色子()  // result === undefined
// setInterval(()=>{
// console.log(window.n)

// },3000)  // 每3秒轮询

// console.log(2)

// 回调
/*
    特征 
        如果函数A的参数是函数B
        那么我们成函数B为回调函数 

    回调函数举例
        button.onclick = fn
        button.addEventListener('click',fn)
        ajax({method:'get',url:'/x',success:fn})    

*/
const 摇色子 = (success)=>{
    setTimeout(()=>{
        const n = Math.floor(Math.random()*6)+1
        console.log(`点数为${n}`)
        // m = n
        success(n)
    },Math.random()*1000)
    // return undefined
}

console.log(1)
const f = (n) => console.log('n: '+n)

const result = 摇色子(f)  // result === undefined


console.log(2)

//  回调用多了会进入回调地狱