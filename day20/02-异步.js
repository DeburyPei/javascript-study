/*
    异步
        定义   
            如果你执行一个函数 却不等待函数返回结果
        特征
            目前而言含有 setTimeout/queueMicrotask/Ajax
            的函数 很有可能是异步函数
*/



// const f = ()=>{
//     const x = setTimeout(()=>{
//         return 'hello'
//     },1000) // 1
//     const y = setTimeout(()=>{
//         return 'hi'
//     },1000) // 2
//     return y

// }

// const x = f()
// console.log(x)  // 输出的是 setTimeout 任务队列的编号 y是2

const f = ()=>{
    const x = setTimeout(()=>{
        console.log('hello')
        
    },1000) // 1
   
    return 1

}
const x = f()
console.log("x:"+x)  // 1

/*
    优先使用异步
    因为长时间同步执行会导致浏览器假死

    const button = document.querySelector('button')
    button.onclick = function (){
        alert(1)
    }
    const 摇色子 = ()=>{
    const t = new Date()
    while(new Date - t < 30000){
          
    }
    const n = Math.floor(Math.random()*6)+1
    console.log(`点数为${n}`)
    return n
}
*/


