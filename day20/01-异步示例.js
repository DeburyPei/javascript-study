//  异步 就是 不等结果
/*
    代码1 
        重复 js不停查看当前时间 每秒查看几百次
        顺序 代码执行顺序符合小白习惯
        结果 result 可以获取色子点数
    
    代码2 
        队列 js不看时间 直接把函数放到任务队列 时间过了自动调用
        顺序 代码执行顺序不符合小白习惯
        结果 result 获取不到色子点数

*/
// 同步  执行完这条语句 才能打印2
// const 摇色子 = ()=>{
//     const t = new Date()
//     while(new Date - t < 3000){
          
//     }
//     const n = Math.floor(Math.random()*6)+1
//     console.log(`点数为${n}`)
//     return n
// }


//  异步 就是 不等结果
const 摇色子 = ()=>{
    setTimeout(()=>{
        const n = Math.floor(Math.random()*6)+1
        console.log(`点数为${n}`)
        return n
    },3000)
    // return undefined
}

console.log(1)
const result = 摇色子()  // result === undefined
console.log(2)
 
